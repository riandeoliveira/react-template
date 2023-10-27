import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import styles from "./styles.module.scss";

export const Navbar = observer((): ReactElement => {
  return (
    <nav>
      <ul className={styles.list}>
        <li>Listagem de Usuários</li>
        <li>Cadastro de Usuários</li>
      </ul>
    </nav>
  );
});
