import React, { useState } from "react";
import { Input } from "@/shared/ui/input";
import { createUser } from "@/shared/api/users.ts";
import { AxiosError } from "axios";
import styles from "./style.module.scss";

export const RegisterForm = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatpassword, setRepeatPassword] = useState<string>('');

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    try {
      const res = await createUser({ username, password });
      console.log(res);
    } catch (e: AxiosError | any) {
      console.log(e.response?.data.error);
    }
  }

  return (
    <form className={styles.form}>
      <Input
        placeholder={"Имя пользователя"}
        type={"text"}
        onChange={setUsername}
        value={username}
      />
      <Input
        placeholder={"Пароль"}
        type={"password"}
        onChange={setPassword}
        value={password}
      />
      <Input
        placeholder={"Пароль"}
        type={"password"}
        onChange={setRepeatPassword}
        value={repeatpassword}
      />
      <button onClick={handleSubmit}>Войти</button>
    </form>
  );
};