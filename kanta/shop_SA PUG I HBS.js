import path from "path";
import express from "express";

const __dirname = path.resolve();
import { products } from "./admin.js";
const router = express.Router();

router.get("/", (req, res, next) => {
  // const products = products;
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
  });
});

export default router;
