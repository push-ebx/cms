import styles from "./style.module.scss";
import { TypesTable } from "@/features/types-table";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { NewTypeModal } from "@/features/new-type-modal";
import { useDisclosure } from "@nextui-org/react";

export const StructuresTypes = () => {
  const currentStructure = useSelector((state: RootState) => state.structureReducer.currentStructure);
  const types = useSelector((state: RootState) => state.typeReducer.types);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className={styles.types}>
      {currentStructure?.id ?
        <>
          <h1>{currentStructure.title}</h1>
          <span className={styles.new} onClick={onOpen}>+ Add new type</span>
          <TypesTable types={types.filter(type => type.struct_id === currentStructure.id)}/>
          <NewTypeModal isOpen={isOpen} onClose={onClose} struct_id={currentStructure.id} />
        </>
        : <p>Choose a structure</p>
      }
    </div>
  );
};