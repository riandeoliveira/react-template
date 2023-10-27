import fs from "fs";

const buildDirectory = "build";
const distDirectory = "dist";

if (fs.existsSync(buildDirectory)) {
  fs.rmdirSync(buildDirectory, { recursive: true });
}

if (fs.existsSync(distDirectory)) {
  fs.rmdirSync(distDirectory, { recursive: true });
}
