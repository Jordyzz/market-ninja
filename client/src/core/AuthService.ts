import { dispatch } from "@src/redux/store";
import { clearUser, setUser } from "@src/redux/user";
import { httpService } from "./HttpService/HttpService";

interface AuthResponse {
  email: string;
  id: string;
}

class AuthService {
  async authenticate(email: string, password: string) {
    const res = await httpService.api<AuthResponse>({
      type: "login",
      data: { email, password },
    });

    dispatch(setUser(res));
  }

  logout() {
    dispatch(clearUser());
  }

  async register(email: string, password: string) {
    const res = await httpService.api<AuthResponse>({
      type: "register",
      data: { email, password },
    });

    res && dispatch(setUser(res));
  }
}

export const authService = new AuthService();
