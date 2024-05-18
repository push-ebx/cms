import { Chip, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip } from "@nextui-org/react";
import React from "react";
import { EditIcon } from "@/shared/ui/icons/EditIcon.tsx";
import { DeleteIcon } from "@/shared/ui/icons/DeleteIcon.tsx";
import { Type } from "@/shared/model";

const columns = [
  { name: "Название", uid: "title" },
  { name: "Тип", uid: "type" },
  { name: "Действия", uid: "actions" }
];

export const TypesTable = ({ types }: { types: Type[] }) => {
  const deleteType = async (type: Type) => {
    console.log("delete ", type);
  }

  const editType = async (type: Type) => {
    console.log("edit ", type);
  }

  // @ts-ignore
  const renderCell = React.useCallback((type, columnKey) => {
    const cellValue = type[columnKey];

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
                <EditIcon onClick={() => editType(type)} />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon onClick={() => deleteType(type)}/>
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table selectionMode="single" aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={types}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};