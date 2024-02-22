import { useState } from "react";
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react";
import { createStructure } from "@/shared/api/structures.ts";
import { addStructure } from "@/entities/structure/structure-slice.ts";
import { useDispatch } from "react-redux";

export const NewStructModal = ({isOpen, onClose}: {isOpen: boolean, onClose: () => void}) => {
  const dispatch = useDispatch();
  const [titleStruct, setTitleStruct] = useState("");

  return (
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
  );
};