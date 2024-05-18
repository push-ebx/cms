import { useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  Selection
} from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { createType } from "@/shared/api/types.ts";
import { addType } from "@/entities/type/type-slice.ts";
import { Type, Types, types } from "@/shared/model";

export const NewTypeModal = ({ isOpen, onClose, struct_id }: {
  isOpen: boolean,
  onClose: () => void,
  struct_id: number
}) => {
  const dispatch = useDispatch();
  const [titleType, setTitleStruct] = useState("");
  const [type, setType] = useState<Types>("integer");

  return (
    <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Создание поля структуры</ModalHeader>
            <ModalBody>
              <Input
                onChange={(e) => setTitleStruct(e.currentTarget.value)}
                placeholder="Название поля структуры"
              />
              <Select
                onSelectionChange={e => setType(e.currentKey)}
                label="Выберите тип данных"
              >
                {types.map((type: Type) => (
                  <SelectItem key={type.type} value={type.type}>
                    {type.title}
                  </SelectItem>
                ))}
              </Select>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" isDisabled={!type || !titleType} onPress={async () => {
                if (!titleType.length) return;

                const res = await createType({ title: titleType, type, struct_id });
                res && dispatch(addType(res));
                onClose();
              }}>
                Создать
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};