import { useState } from "react";
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { createType } from "@/shared/api/types.ts";
import { addType } from "@/entities/type/type-slice.ts";

export const NewTypeModal = ({ isOpen, onClose, struct_id }: {
  isOpen: boolean,
  onClose: () => void,
  struct_id: number
}) => {
  const dispatch = useDispatch();
  const [titleType, setTitleStruct] = useState("");

  return (
    <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Create a structure</ModalHeader>
            <ModalBody>
              <Input
                onChange={(e) => setTitleStruct(e.currentTarget.value)}
                placeholder="Title of type"
              />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onPress={async () => {
                if (!titleType.length) return;

                const res = await createType({ title: titleType, type: "integer", struct_id });
                res && dispatch(addType(res));
                onClose();
              }}>
                Create
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};