const fs = require("fs");

fs.writeFile(
  "example.txt",
  "Hello, this file is created using fs module.",
  (err) => {
    if (err) {
      console.error("Error creating file:", err);
      return;
    }
    console.log("File created successfully!");
  }
);