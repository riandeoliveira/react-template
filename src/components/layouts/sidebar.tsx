import { Icon } from "@/assets/icons";
import { images } from "@/assets/images";
import { cn } from "@/lib/utils";
import { dialogStore } from "@/stores/dialog-store";
import { sidebarStore } from "@/stores/sidebar-store";
import { Divider, IconButton, ListItemIcon, ListItemText, MenuItem, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { observer } from "mobx-react-lite";
import { useState, type ReactElement } from "react";
import { Link } from "react-router-dom";
import { Image } from "../atoms/image";
import { SignOutDialog } from "../dialogs/sign-out-dialog";
import { ThemeToggleMenu } from "../menus/theme-toggle-menu";

export const Sidebar = observer((): ReactElement => {
  const [isSidebarMoving, setIsSidebarMoving] = useState<boolean>(false);

  const handleSidebarExpandion = (): void => {
    setIsSidebarMoving(true);

    setTimeout(() => {
      setIsSidebarMoving(false);

      sidebarStore.toggle();
    }, 500);
  };

  const handleDialogOpen = (): void => dialogStore.open("signOut");

  return (
    <>
      <Paper
        elevation={6}
        className={cn(
          "fixed bg-zinc-50 dark:bg-zinc-900 min-h-screen flex flex-col justify-between !transition-all !duration-500",
          sidebarStore.isExpanded === !isSidebarMoving ? "w-64" : "w-14",
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
          <Divider className="w-full my-12 dark:bg-zinc-500" />
          <nav className="w-full pt-4">
            <ul>
              <Link to="/inicio">
                <MenuItem className="dark:text-zinc-50">
                  <ListItemIcon>
                    <Icon.Home className="dark:text-zinc-50" />
                  </ListItemIcon>
                  <ListItemText>
                    <motion.span
                      initial={{ opacity: sidebarStore.isExpanded === !isSidebarMoving ? 0 : 1 }}
                      animate={{ opacity: sidebarStore.isExpanded === !isSidebarMoving ? 1 : 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      Início
                    </motion.span>
                  </ListItemText>
                </MenuItem>
              </Link>
              <MenuItem onClick={handleDialogOpen} className="!text-error">
                <ListItemIcon>
                  <Icon.Logout className="text-error" />
                </ListItemIcon>
                <ListItemText>
                  <motion.span
                    initial={{ opacity: sidebarStore.isExpanded === !isSidebarMoving ? 0 : 1 }}
                    animate={{ opacity: sidebarStore.isExpanded === !isSidebarMoving ? 1 : 0 }}
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
          <Divider className="w-full dark:bg-zinc-500" />
          <div
            className={cn(
              "flex justify-between py-4 items-center",
              sidebarStore.isExpanded === !isSidebarMoving ? "px-4" : "flex-col",
            )}
          >
            <ThemeToggleMenu />
            <IconButton onClick={handleSidebarExpandion} className="dark:!text-zinc-50">
              <Icon.KeyboardDoubleArrowRight />
            </IconButton>
          </div>
        </div>
      </Paper>
      <SignOutDialog />
    </>
  );
});
