import React, { useState } from "react";

import Button from "@components/Button";
import { authService } from "@core/AuthService";
import styles from "./RegisterModal.scss";

const RegisterModal = ({ dismiss }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const register = () => {
    if (email.length < 6 || password.length < 5 || password !== confirmPassword)
      return;
    authService.register(email, password);
    dismiss();
  };

  return (
    <div className={styles.wrapper}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        value={password}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        style={{ margin: "1rem 0" }}
      />
      <input
        value={confirmPassword}
        type="password"
        placeholder="Confirm password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        style={{ margin: "1rem 0" }}
      />
      <Button onClick={register}>Register</Button>
    </div>
  );
};

export default RegisterModal;
