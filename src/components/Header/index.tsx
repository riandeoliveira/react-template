import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Heading, IconButton, Text, useColorMode } from "@chakra-ui/react";
import { Icon } from "assets/icons";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import styles from "./styles.module.scss";

export const Header = observer((): ReactElement => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <a href="#" className={styles.logo_container}>
          <Icon.ReactLogo className={styles.logo} />
          <Heading>Teste</Heading>
          <Box>
            <Text>Novo teste</Text>
          </Box>
          <h1 className={styles.title}>ReactJS Template</h1>
        </a>
        <div className={styles.theme_mode}>
          {colorMode === "light" ? (
            <IconButton
              aria-label="Switch to dark theme"
              icon={<MoonIcon />}
              onClick={toggleColorMode}
            />
          ) : (
            <IconButton
              aria-label="Switch to light theme"
              icon={<SunIcon />}
              onClick={toggleColorMode}
            />
          )}
        </div>
      </div>
    </header>
  );
});
