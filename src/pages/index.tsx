import { NavigationPanelLayout } from "@/layouts/navigation-panel-layout";
import { SignOutDialog } from "@/layouts/navigation-panel-layout/sign-out-dialog";
import { PrivateRoute } from "@/routes/private-route";
import { type ReactElement } from "react";

const Home = (): ReactElement => {
  return (
    <PrivateRoute>
      <NavigationPanelLayout title="Início">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea id quisquam deleniti unde
          excepturi voluptatibus itaque fugit, dolore nihil earum laborum nisi ipsam eligendi sed
          aperiam beatae sint eos fugiat.
        </p>
      </NavigationPanelLayout>
      <SignOutDialog />
    </PrivateRoute>
  );
};

export default Home;
