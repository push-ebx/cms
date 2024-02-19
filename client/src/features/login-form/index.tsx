import React, { useState } from "react";
import { login } from "@/shared/api/users.ts";
import { AxiosError } from "axios";
import styles from "./style.module.scss";
import { Button, Link, Input, Tab } from "@nextui-org/react";

export const LoginForm = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    try {
      const res = await login({ username, password });

      console.log(res?.access_token);
    } catch (e: AxiosError | any) {
      console.log(e.response?.data.error);
    }
  }

  return (

  );
};