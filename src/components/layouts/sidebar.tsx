import { Icon } from "@/assets/icons";
import { images } from "@/assets/images";
import { cn } from "@/lib/utils";
import { dialogStore } from "@/stores/dialog-store";
import { sidebarStore } from "@/stores/sidebar-store";
import { Divider, IconButton, ListItemIcon, ListItemText, MenuItem, Paper } from "@mui/material";
import { observer } from "mobx-react-lite";
import { type ReactElement } from "react";
import { Link } from "react-router-dom";
import { Image } from "../atoms/image";
import { SignOutDialog } from "../dialogs/sign-out-dialog";
import { ThemeToggleMenu } from "../menus/theme-toggle-menu";

export const Sidebar = observer((): ReactElement => {
  const handleDialogOpen = (): void => dialogStore.open("signOut");

  return (
    <>
      <Paper
        elevation={6}
        className={cn(
          "fixed bg-zinc-50 dark:bg-zinc-900 min-h-screen flex flex-col justify-between !transition-all !duration-500",
          sidebarStore.isExpanded ? "w-64" : "w-14",
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
            {sidebarStore.isExpanded && (
              <strong className="text-2xl animate-grow dark:text-zinc-50">React Template</strong>
            )}
          </a>
          <Divider className="w-full my-12" />
          <nav className="w-full pt-4">
            <ul>
              <Link to="/inicio">
                <MenuItem>
                  <ListItemIcon>
                    <Icon.Home />
                  </ListItemIcon>
                  {sidebarStore.isExpanded && (
                    <ListItemText className="animate-grow">Início</ListItemText>
                  )}
                </MenuItem>
              </Link>
              <MenuItem onClick={handleDialogOpen} className="!text-error">
                <ListItemIcon>
                  <Icon.Logout className="text-error" />
                </ListItemIcon>
                {sidebarStore.isExpanded && (
                  <ListItemText className="animate-grow">Sair</ListItemText>
                )}
              </MenuItem>
            </ul>
          </nav>
        </div>
        <div
          className={cn(
            "pb-4 w-full gap-2 flex items-center justify-between",
            sidebarStore.isExpanded ? "px-4" : "flex-col",
          )}
        >
          <ThemeToggleMenu />
          <IconButton onClick={sidebarStore.toggle} className="dark:!text-zinc-50">
            {sidebarStore.isExpanded ? (
              <Icon.KeyboardDoubleArrowLeft />
            ) : (
              <Icon.KeyboardDoubleArrowRight />
            )}
          </IconButton>
        </div>
      </Paper>
      <SignOutDialog />
    </>
  );
});
