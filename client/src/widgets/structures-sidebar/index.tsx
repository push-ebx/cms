import styles from "./style.module.scss";
import { Input, useDisclosure } from "@nextui-org/react";
import { SearchIcon } from "@/shared/ui/icons";
import { setCurrentStructure } from "@/entities/structure/structure-slice.ts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { NewStructModal } from "@/features/new-struct-modal";

export const StructuresSidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const structures = useSelector((state: RootState) => state.structureReducer.structures);

  return (
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

      <h2>Custom structures</h2>
      <span onClick={onOpen} className={styles.new}>+ Create new</span>

      <div className={styles.custom_structs}>
        <ul className={styles.structs}>
          {
            structures?.length ?
              structures.map(structure => (
                  <li
                    key={structure.id}
                    onClick={() => {
                      structure.id && dispatch(setCurrentStructure({ struct_id: structure.id }));
                    }}
                  >
                    {structure.title}
                  </li>
                )
              ) : ""
          }
        </ul>
      </div>

      <NewStructModal isOpen={isOpen} onClose={onClose} />
    </nav>
  );
};