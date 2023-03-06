import path from "path";
import express from "express";
import bodyParser from "body-parser";
import expressHbs from "express-handlebars"; //Ucitavanje handlebara za rendering

const __dirname = path.resolve();
const app = express();

app.engine(
  "hbs",
  expressHbs({
    extname: "hbs",
    defaultLayout: "main-layout",
    layoutsDir: "views/layouts",
  })
);
app.set("view engine", "hbs");
// app.set("view engine", "pug"); // Ovo nam je linija koja kaze da renderuje pomocu pug
app.set("views", "views");

import adminRouter from "./routes/admin.js";
import shopRouter from "./routes/shop.js";

const port = process.env.PORT;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRouter);
app.use(shopRouter);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "404 Page Not found" });
});

app.listen(port);
