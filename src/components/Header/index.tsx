import { images } from "assets/images";
import { Navbar } from "components/Navbar";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import styles from "./styles.module.scss";

export const Header = observer((): ReactElement => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo_container}>
        <img src={images.reactjsLogo} alt="" className={styles.logo} />
        <h1 className={styles.title}>ReactJS Template</h1>
      </a>
      <Navbar />
    </header>
  );
});
