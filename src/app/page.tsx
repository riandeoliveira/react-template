import { Button } from "@/components/abstractions/button";
import { Paper } from "@mui/material";
import type { ReactElement } from "react";

const HomePage = (): ReactElement => {
  return (
    <Paper elevation={6} className="p-20 m-20 rounded-3xl bg-purple-600">
      <h1>Olá, Mundo!</h1>
      <Button color="error">error</Button>
      <Button color="info">info</Button>
      <Button color="primary">primary</Button>
      <Button color="secondary">secondary</Button>
      <Button color="success">success</Button>
      <Button color="warning">warning</Button>
    </Paper>
  );
};

export default HomePage;
