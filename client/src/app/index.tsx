import { useEffect } from "react";
import "./styles/index.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./providers/RouterProvider.tsx";

export const App = () => {
  document.documentElement.dataset.theme = 'light';

  useEffect(() => {
    (async () => {
      try {
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <RouterProvider router={router} />
  );
};