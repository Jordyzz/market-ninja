import Button from "@components/Button";
import { authService } from "@core/AuthService";
import React, { useState } from "react";

import styles from "./LoginModal.scss";

const LoginModal = ({ dismiss }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    authService.authenticate(email, password);
    dismiss();
  };

  return (
    <div className={styles.wrapper}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        style={{ margin: "1rem 0" }}
      />
      <Button onClick={login}>Login</Button>
    </div>
  );
};

export default LoginModal;
