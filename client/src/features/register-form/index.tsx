import React, { useState } from "react";
import { createUser } from "@/shared/api/users.ts";
import { AxiosError } from "axios";
import styles from "./style.module.scss";
import { Button, Input, Link, Tab } from "@nextui-org/react";

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

  );
};