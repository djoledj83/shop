import express from "express";

const app = express();
const port = process.env.PORT;

app.use("/", (req, res, next) => {
  console.log("Ovo ce se ispaliti svaki put");
  next();
});
app.use("/users", (req, res, next) => {
  console.log("Ovo ce se spaliti jednom");
  res.send("Users page");
});
app.use("/", (req, res, next) => {
  console.log("Ovo ce se spaliti jednom takodje");
  res.send("Main page");
});

app.listen(port);
