import { Chip, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import React from "react";
// import { EditIcon } from "@/shared/ui/icons/EditIcon.tsx";
// import { DeleteIcon } from "@/shared/ui/icons/DeleteIcon.tsx";

export const EntitiesTable = ({ entities }: { entities: any }) => {
  console.log(entities);
  // const deleteEntity = async (entity: Entity) => {
  //   console.log("delete ", entity);
  // };
  //
  // const editEntity = async (entity: Entity) => {
  //   console.log("edit ", entity);
  // };

  return (
    <>
      {
        !entities?.length ? "Загрузка..." :
          <Table selectionMode="single">
            <TableHeader columns={entities[0].map((item: any) => ({ name: item.title, uid: item.title }))}>
              { (column: any) => <TableColumn key={column.uid}> { column.name } </TableColumn> }
            </TableHeader>

            <TableBody items={entities}>
              {
                entities.map((column: any) =>
                  <TableRow key={column[0].entity_id}>
                    { column.map((cell: any) => <TableCell>{cell[cell.type]}</TableCell>) }
                  </TableRow>
                )
              }
            </TableBody>
          </Table>
      }
    </>
  );
};