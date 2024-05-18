import styles from "./style.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { useDisclosure } from "@nextui-org/react";
import { NewEntityModal } from "@/features/new-entity-modal";
import { EntitiesTable } from "@/features/entities-table";
import { useEffect, useState } from "react";
import { getEntities } from "@/shared/api/entities.ts";
import { Entity } from "@/shared/model";

export const EntityList = () => {
  const currentStructure = useSelector((state: RootState) => state.structureReducer.currentStructure);
  const types = useSelector((state: RootState) => state.typeReducer.types);
  const [entities, setEntities] = useState<Entity[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    currentStructure?.id && getEntities({struct_id: currentStructure.id}).then(setEntities);
  }, [currentStructure]);

  return (
    <div className={styles.types}>
      {currentStructure?.id ?
        <>
          <h1>{currentStructure.title}</h1>
          <span className={styles.new} onClick={onOpen}>+ Add new entity</span>
          <EntitiesTable entities={entities}/>
          <NewEntityModal
            types={types.filter(type => type.struct_id === currentStructure.id)}
            isOpen={isOpen}
            onClose={onClose}
            struct_id={currentStructure.id}
          />
        </>
        : <p>Choose a structure</p>
      }
    </div>
  );
};