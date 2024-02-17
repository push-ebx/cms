import { AuthForm } from "@/widgets/auth-form";
import styles from "./style.module.scss";
import { useEffect } from "react";
import { getUsers } from "@/shared/api/users.ts";

export const AuthPage = () => {
  useEffect(() => {
    (async () => {
      try {
        const r = await getUsers();
        console.log(r);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <main className={styles.main}>
      <AuthForm />
    </main>
  );
};