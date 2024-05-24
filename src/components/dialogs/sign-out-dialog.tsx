import { Icon } from "@/assets/icons";
import { dialogStore } from "@/stores/dialog-store";
import { Button, Dialog, DialogActions, DialogContent, IconButton } from "@mui/material";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";

export const SignOutDialog = observer((): ReactElement => {
  const handleDialogClose = (): void => dialogStore.close("signOut");

  const handleSignOut = (): void => {};

  return (
    <Dialog open={dialogStore.signOut.isOpen} onClose={handleDialogClose}>
      <div className="flex justify-between items-center p-2">
        <h2>Aviso</h2>
        <IconButton onClick={handleDialogClose}>
          <Icon.Close />
        </IconButton>
      </div>
      <DialogContent dividers>
        <p>Você tem certeza que deseja sair da sua conta?</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose}>Cancelar</Button>
        <Button color="error" onClick={handleSignOut}>
          Sair
        </Button>
      </DialogActions>
    </Dialog>
  );
});
