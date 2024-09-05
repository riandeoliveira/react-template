import { AlertDialog } from "@/components/alert-dialog";
import { useUserService } from "@/hooks/use-user-service";
import { useDialogStore } from "@/stores/use-dialog-store";
import { type ReactElement } from "react";

export const SignOutDialog = (): ReactElement => {
  const { handleSignOutUser } = useUserService();
  const dialogStore = useDialogStore();

  return (
    <AlertDialog.Root open={dialogStore.signOut.isOpen}>
      <AlertDialog.Overlay onClick={() => dialogStore.close("signOut")}>
        <AlertDialog.Content>
          <AlertDialog.Header>
            <AlertDialog.Title>Aviso</AlertDialog.Title>
            <AlertDialog.Description>
              Você tem certeza que deseja sair da sua conta?
            </AlertDialog.Description>
          </AlertDialog.Header>
          <AlertDialog.Footer>
            <AlertDialog.Cancel onClick={() => dialogStore.close("signOut")}>
              Cancelar
            </AlertDialog.Cancel>
            <AlertDialog.Action onClick={handleSignOutUser}>Sair</AlertDialog.Action>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog.Overlay>
    </AlertDialog.Root>
  );
};
