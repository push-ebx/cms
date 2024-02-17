import { useEffect } from "react";
import "./styles/index.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./providers/router-provider.tsx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { setUserID } from "@/entities/user/model/action-creators.ts";
import { getUser, login } from "@/shared/api/users.ts";
import { AxiosError } from "axios/index";

export const App = () => {
  document.documentElement.dataset.theme = "light";
  const user_id = useSelector((state: RootState) => state.userReducer.id);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(user_id);
    (async () => {
      if (!user_id) {
        try {
          const res = await getUser();
          res?.id && dispatch(setUserID(res.id));


        } catch (e: AxiosError | any) {
          console.log(e.response?.data.error);
        }
      }
    })();
  }, [user_id]);

  return (
    <RouterProvider router={router} />
  );
};