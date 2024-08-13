import { Icon } from "@/assets/icons";
import { Button } from "@/components/atoms/button";
import { PrivateRoute } from "@/components/private-route";
import { AppBar, Drawer, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import type { ReactElement } from "react";

const HomePage = (): ReactElement => {
  return (
    <PrivateRoute>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <Icon.Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor={"left"} open={true}>
        <List>
          <ListItem>Teste</ListItem>
          <ListItem>Teste</ListItem>
          <ListItem>Teste</ListItem>
          <ListItem>Teste</ListItem>
          <ListItem>Teste</ListItem>
        </List>
      </Drawer>
    </PrivateRoute>
  );
};

export default HomePage;
