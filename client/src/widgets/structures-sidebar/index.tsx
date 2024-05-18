import styles from "./style.module.scss";
import { Input, useDisclosure } from "@nextui-org/react";
import { SearchIcon } from "@/shared/ui/icons";
import { setCurrentStructure } from "@/entities/structure/structure-slice.ts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { NewStructModal } from "@/features/new-struct-modal";
import { clsx } from "clsx";
import { useState } from "react";

export const StructuresSidebar = ({ title = "Создание структур", createNew = true }: {
  title?: string,
  createNew?: boolean
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const structures = useSelector((state: RootState) => state.structureReducer.structures);
  const currentStructure = useSelector((state: RootState) => state.structureReducer.currentStructure);
  const [search, setSearch] = useState('');

  const filteredStructures = structures.filter(structure =>
    structure.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <nav className={styles.sidebar}>
      <h1>{title}</h1>
      <Input
        type="search"
        size={"sm"}
        placeholder="Поиск"
        endContent={
          <SearchIcon />
        }
        variant="bordered"
        onValueChange={setSearch}
      />

      <h2>Пользовательские структуры</h2>
      { createNew ? <span onClick={onOpen} className={styles.new}>+ Создать</span> : "" }

      <div className={styles.custom_structs}>
        <ul className={styles.structs}>
          {
            structures?.length ?
              filteredStructures.map(structure => (
                  <li
                    className={clsx(structure.id === currentStructure?.id && styles.active_struct)}
                    key={structure.id}
                    onClick={() => {
                      structure.id && dispatch(setCurrentStructure({ struct_id: structure.id }));
                    }}
                  >
                    {structure.title}
                  </li>
                )
              ) : "Структуры не найдены"
          }
        </ul>
      </div>

      <NewStructModal isOpen={isOpen} onClose={onClose} />
    </nav>
  );
};