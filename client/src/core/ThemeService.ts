import { getState, dispatch } from "@redux/store";
import { setTheme } from "@src/redux/config";

class ThemeService {
  private themes = {
    light: {
      backgroundColor: "#f6f6f8",
      backgroundSecondaryColor: "#fff",
      backgroundTretiaryColor: "#232041",
      backgroundQuaternaryColor: "#1f1c3d",
      backgroundHover: "#454164",
      selectedColor: "#23eaa4",
      fontColor: "#000",
      fontSecondaryColor: "#d3d3d3",
      fontProfit: "#23eaa4",
      fontLoss: "#e25050",
      buttonColor: "#000",
      borderColor: "#000",
    },
    dark: {
      backgroundColor: "#1a1736",
      backgroundSecondaryColor: "#2e2a4d",
      backgroundTretiaryColor: "#232041",
      backgroundQuaternaryColor: "#1f1c3d",
      backgroundHover: "#454164",
      fontColor: "#fff",
      fontSecondaryColor: "#646984",
      selectedColor: "#23eaa4",
      fontProfit: "#23eaa4",
      fontLoss: "#e25050",
      buttonColor: "#fff",
      borderColor: "#fff",
    },
  };

  private vars = {
    backgroundColor: undefined,
    backgroundSecondaryColor: undefined,
    backgroundTretiaryColor: undefined,
    backgroundQuaternaryColor: undefined,
    backgroundHover: undefined,
    selectedColor: undefined,
    fontColor: undefined,
    fontProfit: undefined,
    fontLoss: undefined,
    borderColor: undefined,
  };

  init(type?: string) {
    Object.assign(this.vars, type ? this.themes[type] : this.themes.dark);
    for (let key in this.vars) {
      this.setVariable(key, this.vars[key]);
    }
  }

  toggleTheme() {
    const activeTheme = getState().config.theme;
    const newTheme = activeTheme === "light" ? "dark" : "light";
    this.init(newTheme);
    dispatch(setTheme(newTheme));
  }

  private setVariable(key: string, value: string) {
    document.documentElement.style.setProperty(`--${key}`, value);
  }
}

export const themeService = new ThemeService();
