import fs from "fs";
import path from "path";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Your componente name: ", (componentName) => {
  const componentsDir = path.join("src", "components");
  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
  }

  const componentDir = path.join(componentsDir, componentName);
  fs.mkdirSync(componentDir, { recursive: true });

  const indexContent = `import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import styles from "./styles.module.scss";

export const ${componentName} = observer((): ReactElement => {
  return (
    <div className={styles.container}>
      <div>...</div>
    </div>
  );
});
`;
  fs.writeFileSync(path.join(componentDir, "index.tsx"), indexContent);

  const stylesContent = `@use "../../styles" as *;

.container {
  background-color: #f00;
}
`;
  fs.writeFileSync(path.join(componentDir, "styles.module.scss"), stylesContent);

  console.log(`React component '${componentName}' created in '${componentDir}'.`);
  rl.close();
});
