import { NavigationPanelLayout } from "@/layouts/navigation-panel-layout";
import type { ReactElement } from "react";

const Home = (): ReactElement => {
  return (
    <NavigationPanelLayout title="Início">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea id quisquam deleniti unde
        excepturi voluptatibus itaque fugit, dolore nihil earum laborum nisi ipsam eligendi sed
        aperiam beatae sint eos fugiat.
      </p>
    </NavigationPanelLayout>
  );
};

export default Home;
