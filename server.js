const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
app.listen(port, () => console.log(port));
const api = require("./server/pages/NBA_API.js");
app.use("/", api);
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));
