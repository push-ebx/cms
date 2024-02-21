import { ToggleTheme } from "@/features/toggle-theme";
import styles from "./style.module.scss";
// import { Link } from "@nextui-org/react";
import { NavLink, useLocation } from "react-router-dom";
import { clsx } from "clsx";
import { Link } from "react-router-dom";
import { Logo } from "@/shared/ui/icons/Logo.tsx";

export const Header = () => {
  const location = useLocation();

  const navbar = [
    { title: "Сreator of structures", route: "/dashboard/creator-of-structure" },
    { title: "Content Manager", route: "/dashboard/content-repository" },
    { title: "Media collection", route: "/dashboard/media-collection" },
    { title: "REST API", route: "/dashboard/rest-api" },
    { title: "Settings", route: "/dashboard/settings" }
  ];

  return (
    <header className={styles.header}>
      <Logo color={"hsl(var(--nextui-foreground) / var(--nextui-foreground-opacity, var(--tw-text-opacity)))"} className={styles.logo}/>
      <nav className={styles.nav}>
        {
          navbar.map(nav => (
            <NavLink
              to={nav.route}
              key={nav.route}
              className={({ isActive }) => isActive ? styles.active_nav_link : ""}
            >
              {nav.title}
            </NavLink>
          ))
        }
      </nav>
      <ToggleTheme />
    </header>
  );
};