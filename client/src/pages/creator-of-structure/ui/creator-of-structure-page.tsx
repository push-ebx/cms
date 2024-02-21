import styles from "./style.module.scss";
import { clsx } from "clsx";
import {
  Button,
  Chip,
  Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip, useDisclosure
} from "@nextui-org/react";
import { SearchIcon } from "@/shared/ui/icons";
import React, { useEffect, useState } from "react";
import { EditIcon } from "@/shared/ui/icons/EditIcon.tsx";
import { DeleteIcon } from "@/shared/ui/icons/DeleteIcon.tsx";
import { createStructure, getStructures } from "@/shared/api/structures.ts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { addStructure, setCurrentStructure, setStructures } from "@/entities/structure/structure-slice.ts";

const columns = [
  { name: "TITLE", uid: "title" },
  { name: "TYPE", uid: "type" },
  { name: "ACTIONS", uid: "actions" }
];

const users = [
  {
    id: 1,
    title: "Title",
    type: "Text"
  },
  {
    id: 2,
    title: "Age",
    type: "Integer"
  },
  {
    id: 3,
    title: "Jane Fisher",
    type: "Senior Developer"
  },
  {
    id: 4,
    title: "William Howard",
    type: "Community Manager"
  },
  {
    id: 5,
    title: "Kristen Copper",
    type: "Sales Manager"
  }
];

export const CreatorOfStructurePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [titleStruct, setTitleStruct] = useState("");
  // const [structures, setStructures] = useState<Structure[] | undefined>([]);

  const structures = useSelector((state: RootState) => state.structureReducer.structures);
  const currentStructure = useSelector((state: RootState) => state.structureReducer.currentStructure);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      // todo: добавить обработку ошибок
      const res = await getStructures();
      res && dispatch(setStructures(res));
    })();
  }, []);

  // @ts-ignore
  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "title":
        return (
          <Chip color="success" variant="flat">
            {cellValue}
          </Chip>
        );
      case "type":
        return (
          <Chip color="primary" variant="flat">
            {cellValue}
          </Chip>
        );
      case "actions":
        return (

          <div className="relative flex items-center gap-2">
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);


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
        </nav>

        <div className={styles.fields}>
          {currentStructure ?
            <>
              <h1>{currentStructure.title}</h1>
              <span className={styles.new}>+ Add new field</span>

              <Table selectionMode="single" aria-label="Example table with custom cells">
                <TableHeader columns={columns}>
                  {(column) => (
                    <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                      {column.name}
                    </TableColumn>
                  )}
                </TableHeader>
                <TableBody items={users}>
                  {(item) => (
                    <TableRow key={item.id}>
                      {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </>
            : <p>Choose a structure</p>
          }
        </div>
      </div>

      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Create a structure</ModalHeader>
              <ModalBody>
                <Input
                  onChange={(e) => setTitleStruct(e.currentTarget.value)}
                  placeholder="Title of strucure"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={async () => {
                  if (!titleStruct.length) return;

                  const res = await createStructure(titleStruct);
                  res && dispatch(addStructure(res));
                  // обновить в rtk
                  onClose();
                }}>
                  Create
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};