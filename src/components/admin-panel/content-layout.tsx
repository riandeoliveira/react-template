import { Navbar } from "@/components/admin-panel/navbar";
import type { ReactElement, ReactNode } from "react";

interface ContentLayoutProps {
  title: string;
  children: ReactNode;
}

export const ContentLayout = ({ title, children }: ContentLayoutProps): ReactElement => {
  return (
    <div>
      <Navbar title={title} />
      <main className="container pt-8 pb-8 px-4 sm:px-8">{children}</main>
    </div>
  );
};
