import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { userStore } from "features/user/store";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { modalStore } from "store/modal.store";

export const DeleteUserModal = observer((): ReactElement => {
  const { first_name, last_name } = userStore.selected;

  const handleCloseModal = (): void => {
    modalStore.close("deleteUser");
  };

  return (
    <Modal isCentered isOpen={modalStore.deleteUser.isOpen} onClose={handleCloseModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Excluir Usuário</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            Você tem certeza que deseja excluir a conta de
            <strong>
              &nbsp;
              {first_name} {last_name}
            </strong>
            ?
          </Text>
        </ModalBody>
        <ModalFooter justifyContent="space-between">
          <Button variant="solid" colorScheme="blue" mr={3} onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button colorScheme="red">Confirmar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
});
