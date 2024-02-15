import { AuthForm } from "@/widgets/auth-form";
import styles from "./style.module.scss";

export const AuthPage = () => {
  return (
    <main className={styles.main}>
      <AuthForm />
    </main>
  );
};