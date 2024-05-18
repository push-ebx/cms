import { useState } from "react";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { Type } from "@/shared/model";
import { createEntity } from "@/shared/api/entities.ts";
import { DefineInput } from "@/shared/ui/define-input";

export const NewEntityModal = ({ types, isOpen, onClose, struct_id }: {
  types: Type[],
  isOpen: boolean,
  onClose: () => void,
  struct_id: number
}) => {
  // const dispatch = useDispatch();
  const [fieldValues, setFieldValues] = useState({});

  return (
    <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Создание сущности</ModalHeader>
            <ModalBody>
              {
                types.map(type => (
                  <DefineInput
                    type={type}
                    onChange={value => setFieldValues(prevState =>
                      ({ ...prevState, [type.title]: value })
                    )}
                    placeholder={type.title}
                  />
                ))
              }
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onPress={async () => {
                const fields = types.map(type => ({
                  type: type.type,
                  title: type.title,
                  // @ts-ignore
                  [type.type]: fieldValues[type.title]
                }))
                console.log(fields);
                // console.log(fieldValues)
                await createEntity({struct_id, fields});
                // console.log(res);
                // res && dispatch(addType(res));
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