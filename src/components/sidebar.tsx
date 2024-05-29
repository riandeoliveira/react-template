import { Icon } from "@/assets/icons";
import { images } from "@/assets/images";
import { SignOutDialog } from "@/components/sign-out-dialog";
import { cn } from "@/lib/utils";
import { dialogStore } from "@/stores/dialog-store";
import { sidebarStore } from "@/stores/sidebar-store";
import { IconButton, ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import { motion } from "framer-motion";
import { observer } from "mobx-react-lite";
import { type ReactElement } from "react";
import { Divider } from "./divider";
import { Image } from "./image";
import { Paper } from "./paper";
import { SidebarLink } from "./sidebar-link";
import { ThemeToggleMenu } from "./theme-toggle-menu";

export const Sidebar = observer((): ReactElement => {
  const isSidebarStatic: boolean = sidebarStore.isExpanded === !sidebarStore.isMoving;

  const handleSidebarExpandion = (): void => {
    sidebarStore.setIsMoving(true);

    setTimeout(() => {
      sidebarStore.setIsMoving(false);

      sidebarStore.toggleExpansion();
    }, 500);
  };

  const handleDialogOpen = (): void => dialogStore.open("signOut");

  return (
    <>
      <Paper
        className={cn(
          "fixed min-h-screen flex flex-col justify-between !transition-all !duration-500",
          isSidebarStatic ? "w-64" : "w-14",
        )}
      >
        <div className="flex flex-col w-full items-center">
          <a
            href="/"
            aria-label="Logo"
            className="flex flex-col justify-center items-center gap-2 px-2 py-4 h-[200px] w-full"
          >
            <Image
              src={images.logo}
              alt="Project logo"
              width={128}
              height={128}
              className="w-32 h-32 animate-spin duration-5000"
            />
          </a>
          <Divider className="my-12" />
          <nav className="w-full pt-4">
            <ul className="flex flex-col gap-2">
              <SidebarLink to="/inicio" icon={Icon.Home}>
                Início
              </SidebarLink>
              <SidebarLink to="/usuarios" icon={Icon.Group}>
                Usuários
              </SidebarLink>
              <SidebarLink to="/notificacoes" icon={Icon.Notifications}>
                Notificações
              </SidebarLink>
              <SidebarLink to="/configuracoes" icon={Icon.Settings}>
                Configurações
              </SidebarLink>
              <MenuItem onClick={handleDialogOpen} className="!text-error">
                <ListItemIcon>
                  <Icon.Logout className="text-error" />
                </ListItemIcon>
                <ListItemText>
                  <motion.span
                    initial={{ opacity: isSidebarStatic ? 0 : 1 }}
                    animate={{ opacity: isSidebarStatic ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Sair
                  </motion.span>
                </ListItemText>
              </MenuItem>
            </ul>
          </nav>
        </div>
        <div>
          <Divider />
          <div
            className={cn(
              "flex justify-between py-4 items-center",
              isSidebarStatic ? "px-4" : "flex-col",
            )}
          >
            <ThemeToggleMenu />
            <IconButton onClick={handleSidebarExpandion}>
              <motion.span
                animate={{ rotate: isSidebarStatic ? 180 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <Icon.KeyboardDoubleArrowRight />
              </motion.span>
            </IconButton>
          </div>
        </div>
      </Paper>
      <SignOutDialog />
    </>
  );
});
