import { Sidebar } from "@/components/sidebar";
import { observer } from "mobx-react-lite";
import { type ReactElement } from "react";

export const SidebarPage = observer((): ReactElement => {
  return <Sidebar />;
});
