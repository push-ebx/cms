import "./styles/index.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./providers/router-provider.tsx";
import { useDarkMode } from "@/shared/lib/useDarkMode.tsx";
import { clsx } from "clsx";

export const App = () => {
  const [theme] = useDarkMode();

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