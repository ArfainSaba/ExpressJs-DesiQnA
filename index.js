const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

const firstMiddleWare = (req, res, next) => {
  console.log(req);
  next();
};

app.use(express.static(path.join(__dirname, "public")));
app.use(firstMiddleWare);

app.get("/first", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
  res.status(500);
});
app.get("/contact", (req, res) => {
  res.json({ number: 75879380947 });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
