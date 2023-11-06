import fs from "fs";

function removeDirectoryIfExists(directory) {
  if (fs.existsSync(directory)) {
    fs.rmSync(directory, { recursive: true });
  }
}

removeDirectoryIfExists("build");
removeDirectoryIfExists("dist");
