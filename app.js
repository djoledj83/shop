import path from "path";
import express from "express";
import bodyParser from "body-parser";

const __dirname = path.resolve();
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

import { AdmnRouter } from "./routes/admin.js";
import { shopRouter } from "./routes/shop.js";
import { get404 } from "./controllers/error.js";

const port = process.env.PORT;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", AdmnRouter);
// app.use("/users", shopRouter);
app.use(shopRouter);

app.use(get404);

app.listen(port);
