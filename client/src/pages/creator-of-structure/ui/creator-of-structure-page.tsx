import styles from "./style.module.scss";
import { clsx } from "clsx";
import { useEffect } from "react";
import { getStructures } from "@/shared/api/structures.ts";
import { useDispatch } from "react-redux";
import { setStructures } from "@/entities/structure/structure-slice.ts";
import { StructuresSidebar } from "@/widgets/structures-sidebar";
import { StructuresTypes } from "@/widgets/structures-types";
import { AxiosError } from "axios";
import { getTypes } from "@/shared/api/types.ts";
import { setTypes } from "@/entities/type/type-slice.ts";

export const CreatorOfStructurePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const res = await getStructures();
        res && dispatch(setStructures(res));
      } catch (e: AxiosError | any) {
        console.log(e.response?.data.error);
      }

      try {
        const res = await getTypes();
        res && dispatch(setTypes(res));
      } catch (e: AxiosError | any) {
        console.log(e.response?.data.error);
      }
    })();
  }, []);

  return (
    <div className={clsx(styles.main, "")}>
      <div className={styles.container}>
        <StructuresSidebar />
        <StructuresTypes />
      </div>
    </div>
  );
};