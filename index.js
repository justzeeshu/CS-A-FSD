import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const_filename = fileURLToPath(import.meta.url);
const__dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
    const filepath = path.join(__dirname, "message.txt");

    fs.readFile(filepath, "utf8", (err, data) => {
        if (err) {
            res.writeHead(500, { "content-type": "text/plain" });
            res.end("error reading file");
        } else {
            res.writeHead(200, { "content-type": "text/plain" });
            res.end(data);
        }
    });
});

server.listen(3000, (const__filename)=> {
    console.log("server is running");
});