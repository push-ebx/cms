import { LoginForm } from "@/features/login-form";
import { RegisterForm } from "@/features/register-form";
import { useState } from "react";

export const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main>
      <div>
        <button onClick={() => setIsLogin(true)}>Войти</button>
        <button onClick={() => {setIsLogin(false)}}>Зарегистрироваться</button>
      </div>

      { isLogin ? <LoginForm /> : <RegisterForm /> }
    </main>
  );
};