const fs = require("fs").promises;
async function readFile() {
    try {
        const data = await fs.readFile("message.txt", "utf8");
        console.log(data);
    } catch (err) {
        console.error("error reading file", err);
    }
}

readFile();

const { promisify } = require("util");
const readFileAsync = promisify(require("fs").readFile);

async function readFileWithPromisify() {
    try {
        const data = await readFileAsync("message.txt", "utf8");
        console.log(data);
    } catch (err) {
        console.error("error reading file with promisify", err);
    }
}

readFileWithPromisify();
