import { Chip, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip } from "@nextui-org/react";
import React from "react";
import { EditIcon } from "@/shared/ui/icons/EditIcon.tsx";
import { DeleteIcon } from "@/shared/ui/icons/DeleteIcon.tsx";
import { Entity, Type } from "@/shared/model";

const columns = [
  { name: "TITLE", uid: "title" },
  { name: "TYPE", uid: "type" },
  { name: "ACTIONS", uid: "actions" }
];

export const EntitiesTable = ({ entities }: { entities: Entity[] }) => {
  console.log(entities);
  const deleteEntity = async (entity: Entity) => {
    console.log("delete ", entity);
  };

  const editEntity = async (entity: Entity) => {
    console.log("edit ", entity);
  };

  // @ts-ignore
  const renderCell = React.useCallback((type, columnKey) => {
    console.log(type, columnKey);
    const cellValue = type[columnKey];
    if (!cellValue) return;

    switch (columnKey) {
      // case "title":
      //   return (
      //     <Chip color="success" variant="flat">
      //       {cellValue}
      //     </Chip>
      //   );
      // case "type":
      //   return (
      //     <Chip color="primary" variant="flat">
      //       {cellValue}
      //     </Chip>
      //   );
      // case "actions":
      //   return (
      //     <div className="relative flex items-center gap-2">
      //       <Tooltip content="Edit user">
      //         <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
      //           <EditIcon onClick={() => editEntity(type)} />
      //         </span>
      //       </Tooltip>
      //       <Tooltip color="danger" content="Delete user">
      //         <span className="text-lg text-danger cursor-pointer active:opacity-50">
      //           <DeleteIcon onClick={() => deleteEntity(type)}/>
      //         </span>
      //       </Tooltip>
      //     </div>
      //   );
      default:
        return (
          <Chip color="primary" variant="flat">
            {cellValue}
          </Chip>
        );
    }
  }, []);

  return (
    <>
      {
        !entities?.length ? "Загрузка..." :
          <Table selectionMode="single" aria-label="Example table with custom cells">
            <TableHeader columns={entities[0].map(item => ({ name: item.title, uid: item.title }))}>
              {(column) => (
                <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                  {column.name}
                </TableColumn>
              )}
            </TableHeader>

            <TableBody items={entities}>
              {entities.map((column, index) =>
                <TableRow key={column[0].entity_id}>
                  {column.map(cell => <TableCell>{cell[cell.type]}</TableCell>)}
                </TableRow>
              )}
            </TableBody>
          </Table>
      }
    </>
  );
};