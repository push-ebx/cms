import styles from "./style.module.scss";
import { clsx } from "clsx";
import { StructuresSidebar } from "@/widgets/structures-sidebar";
import { EntityList } from "@/widgets/entity-list";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { AxiosError } from "axios";
import { getStructures } from "@/shared/api/structures.ts";
import { setStructures } from "@/entities/structure/structure-slice.ts";
import { getTypes } from "@/shared/api/types.ts";
import { setTypes } from "@/entities/type/type-slice.ts";

export const ContentRepositoryPage = () => {
  const dispatch = useDispatch();

  useEffect(() => { // todo: вынести выше и для create of structure
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
        <StructuresSidebar title={"Content manager"} createNew={false}/>
        <EntityList />
      </div>
    </div>
  );
};