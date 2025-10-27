import fs from "fs";
import path from "path";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.clear();
console.log("===== Project Bootstrap =====\n");

rl.question("Name: ", (name) => {
  updateHomePageFile();
  updateHtmlRootFile(name);
  updateLocaleFile("en-us");
  updateLocaleFile("pt-br");
  updatePackageJsonFile(name);

  deleteGitFolder();
  deleteScriptsFolder();

  console.log("\n✅ Project ready to start! Have a nice coding ;)");
  console.log("\n=============================");

  rl.close();
});

const deleteGitFolder = () => {
  const filePath = path.resolve(".git");

  fs.rmSync(filePath, { recursive: true, force: true });
}

const deleteScriptsFolder = () => {
  const filePath = path.resolve("scripts");

  fs.rmSync(filePath, { recursive: true, force: true });
}

const updateHomePageFile = () => {
  const filePath = path.resolve("src/pages/home.tsx");

  const template =
`export const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-2">
      <h1 className="text-3xl font-semibold">Hello, World!</h1>
      <p>Have a nice coding ;)</p>
    </div>
  );
};
`;

  fs.writeFileSync(filePath, template, "utf-8");
}

const updateHtmlRootFile = (projectName) => {
  const filePath = path.resolve("index.html");

  let fileContent = fs.readFileSync(filePath, "utf-8");

  fileContent = fileContent.replace(
    /<title>.*<\/title>/,
    `<title>${projectName}</title>`
  );

  fs.writeFileSync(filePath, fileContent, "utf-8");
}

const updateLocaleFile = (fileName) => {
  const filePath = path.resolve(`src/locales/${fileName}.json`);

  let fileContent = fs.readFileSync(filePath, "utf-8");

  fileContent = fileContent
    .split("\n")
    .filter(
      (line) =>
        !line.includes('"card_description"') && !line.includes('"card_title"') && !line.includes('"confirm_dialog_description"')
    )
    .join("\n");

  fileContent = fileContent.replace(
    /("meta_description"\s*:\s*")[^"]*"/,
    `$1"`
  );

  fs.writeFileSync(filePath, fileContent, "utf-8");
};

const updatePackageJsonFile = (projectName) => {
  const filePath = path.resolve("package.json");
  const fileContent = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  fileContent.name = toKebabCase(projectName);
  fileContent.version = "0.1.0";

  delete fileContent.scripts.bootstrap;

  fs.writeFileSync(filePath, JSON.stringify(fileContent, null, 2) + "\n", "utf-8");
}

const toKebabCase = (text) => {
  return text
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
