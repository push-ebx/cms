import styles from "./style.module.scss";
import { clsx } from "clsx";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "@/shared/ui/icons";

export const CreatorOfStructurePage = () => {
  return (
    <div className={clsx(styles.main, "")}>
      <div className={styles.container}>
        <nav className={styles.sidebar}>
          <h1>Сreator of structures</h1>
          <Input
            type="search"
            size={"sm"}
            placeholder="Search"
            endContent={
              <SearchIcon />
            }
            variant="bordered"
            onValueChange={() => {
            }}
          />
          <div className={styles.custom_structs}>
            <h2>Custom structures</h2>
            <span className={styles.new_struct}>+ Create new</span>
            <ul className={styles.structs}>
              <li>FAQ</li>
              <li>Carousel-card</li>
              <li>User-cards</li>
              <li>FAQ</li>
              <li>Carousel-card</li>
              <li>User-cards</li>
              <li>FAQ</li>
              <li>Carousel-card</li>
              <li>User-cards</li>
              <li>FAQ</li>
              <li>Carousel-card</li>
              <li>User-cards</li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};