import { useEffect } from "react";
import { getUsers, getUser } from "@/shared/api/users.ts";

export const App = () => {
  useEffect(() => {
    (async () => {
      try {
        const users = await getUser({id: 100});
        console.log(users);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <>
      123
    </>
  );
};