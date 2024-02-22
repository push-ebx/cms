import { Chip, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip } from "@nextui-org/react";
import React from "react";
import { EditIcon } from "@/shared/ui/icons/EditIcon.tsx";
import { DeleteIcon } from "@/shared/ui/icons/DeleteIcon.tsx";

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

export const TypesTable = () => {
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
  );
};