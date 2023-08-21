const express = require("express");
const app = express();
app.use("/", () => {
  console.log("route working");
});

module.exports= app;