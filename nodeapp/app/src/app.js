const https = require("https");
const fs = require("fs");
const express = require("express");

const options = {
  key: fs.readFileSync("/config/tls.key"),
  cert: fs.readFileSync("/config/tls.crt")
};

const app = express();

app.use((req, res) => {
  res.writeHead(200);
  res.end("This is a secure WebApp\n");
});

https.createServer(options, app).listen(8000);
