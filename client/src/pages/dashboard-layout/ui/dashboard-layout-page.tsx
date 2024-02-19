import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/header";

export const DashboardLayoutPage = () => {
  return (
    <main className={"bg-background font-sans"}>
      <Header />
      <Outlet />
    </main>
  );
};