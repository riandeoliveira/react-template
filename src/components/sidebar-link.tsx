import { sidebarStore } from "@/stores/sidebar-store";
import type { SvgIconComponent } from "@mui/icons-material";
import { ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import { motion } from "framer-motion";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { Link } from "react-router-dom";

type SidebarLinkProps = {
  children: string;
  icon: SvgIconComponent;
  to: string;
};

export const SidebarLink = observer(
  ({ children, icon: Icon, to }: SidebarLinkProps): ReactElement => {
    const isSidebarStatic: boolean = sidebarStore.isExpanded === !sidebarStore.isMoving;

    return (
      <Link to={to}>
        <MenuItem>
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
          <ListItemText>
            <motion.span
              initial={{ opacity: isSidebarStatic ? 0 : 1 }}
              animate={{ opacity: isSidebarStatic ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              {children}
            </motion.span>
          </ListItemText>
        </MenuItem>
      </Link>
    );
  },
);
