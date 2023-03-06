import path from "path";
import express from "express";

const __dirname = path.resolve();
const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Prodct",
    path: "/admin/add-product",
    activeAddProduct: true,
  });
});

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

export { products };
// export router;
export default router;
// export const products = [];
