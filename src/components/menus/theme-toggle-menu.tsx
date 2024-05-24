import { Icon } from "@/assets/icons";
import { themeStore } from "@/stores/theme-store";
import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import { observer } from "mobx-react-lite";
import type { MouseEvent } from "react";
import { useState, type ReactElement } from "react";

export const ThemeToggleMenu = observer((): ReactElement => {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);

  const isOpen: boolean = !!anchorElement;

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorElement(event.currentTarget);
  };

  const handleMenuClose = (): void => {
    setAnchorElement(null);
  };

  return (
    <>
      <IconButton onClick={handleButtonClick}>
        {!themeStore.getStoredTheme() ? (
          <Icon.Monitor />
        ) : themeStore.theme === "dark" ? (
          <Icon.DarkMode />
        ) : (
          <Icon.LightMode />
        )}
      </IconButton>
      <Menu
        open={isOpen}
        anchorEl={anchorElement}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <MenuItem
          onClick={() => {
            themeStore.setLightTheme();

            handleMenuClose();
          }}
        >
          <ListItemIcon>
            <Icon.LightMode />
          </ListItemIcon>
          <ListItemText>Claro</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => {
            themeStore.setDarkTheme();

            handleMenuClose();
          }}
        >
          <ListItemIcon>
            <Icon.DarkMode />
          </ListItemIcon>
          <ListItemText>Escuro</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => {
            themeStore.setSystemTheme();

            handleMenuClose();
          }}
        >
          <ListItemIcon>
            <Icon.Monitor />
          </ListItemIcon>
          <ListItemText>Sistema</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
});
