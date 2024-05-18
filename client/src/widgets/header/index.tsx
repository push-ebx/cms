// import { ToggleTheme } from "@/features/toggle-theme";
import styles from "./style.module.scss";
import { NavLink } from "react-router-dom";
import { Logo } from "@/shared/ui/icons/Logo.tsx";

export const Header = () => {
  const navbar = [
    { title: "Создание структур", route: "/dashboard/creator-of-structure" },
    { title: "Сущности", route: "/dashboard/content-repository" },
    // { title: "Media collection", route: "/dashboard/media-collection" },
    { title: "Маршруты", route: "/dashboard/rest-api" },
    { title: "Настройки", route: "/dashboard/settings" }
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
      {/*<ToggleTheme />*/}
    </header>
  );
};