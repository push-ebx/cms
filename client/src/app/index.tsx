import { useEffect } from "react";
import "./styles/index.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./providers/router-provider.tsx";
import { getUser } from "@/shared/api/users.ts";
import { AxiosError } from "axios";
import { useDarkMode } from "@/shared/lib/useDarkMode.tsx";
import { clsx } from "clsx";

export const App = () => {
  const [theme, setTheme] = useDarkMode();

  useEffect(() => {
    console.log("app:", theme);
  }, [theme]);

  // useEffect(() => {
  //   (async () => {
  //     if (!user_id) {
  //       try {
  //         const res = await getUser();
  //         res?.id && dispatch(setUserID(res.id));
  //       } catch (e: AxiosError | any) {
  //         // console.log(e.response?.data.error);
  //       }
  //     }
  //   })();
  // }, [user_id]);

  return (
    <main className={clsx(theme, 'text-foreground bg-background')}>
      <RouterProvider router={router} />
    </main>
  );
};