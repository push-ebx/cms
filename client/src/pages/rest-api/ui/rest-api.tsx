import styles from "./style.module.scss";
import {Snippet} from "@nextui-org/snippet";
import { clsx } from "clsx";
import { StructuresSidebar } from "@/widgets/structures-sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getStructures } from "@/shared/api/structures.ts";
import { setStructures } from "@/entities/structure/structure-slice.ts";
import { AxiosError } from "axios";
import { getTypes } from "@/shared/api/types.ts";
import { setTypes } from "@/entities/type/type-slice.ts";
import { RootState } from "@/app/store";

export const RestApi = () => {
  const dispatch = useDispatch();
  const currentStructure = useSelector((state: RootState) => state.structureReducer.currentStructure);

  useEffect(() => { // todo: вынести выше и для create of structure и для rest
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
        <StructuresSidebar title={"REST API"} createNew={false}/>
        {
          currentStructure ?
            <ul>
              <li><Snippet hideSymbol>{`http://localhost:5001/api/entities?struct_id=${currentStructure.id}`}</Snippet></li>
            </ul> :
            "Выбирите структуру"
        }
      </div>
    </div>
  );
};