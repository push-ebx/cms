import styles from "./style.module.scss";
import { TypesTable } from "@/features/types-table";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

export const StructuresTypes = () => {
  const currentStructure = useSelector((state: RootState) => state.structureReducer.currentStructure);

  return (
    <div className={styles.types}>
      {currentStructure ?
        <>
          <h1>{currentStructure.title}</h1>
          <span className={styles.new}>+ Add new field</span>
          <TypesTable />
        </>
        : <p>Choose a structure</p>
      }
    </div>
  );
};