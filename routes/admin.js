// import path from "path";
import express from "express";
import {
  getAddProduct,
  postAddProduct,
  adminProducts,
} from "../controllers/admin.js";

// const __dirname = path.resolve();
const AdmnRouter = express.Router();

// const products = [];

AdmnRouter.get("/add-product", getAddProduct);
AdmnRouter.post("/add-product", postAddProduct);
AdmnRouter.get("/products", adminProducts);

export { AdmnRouter };
// export { products, AdmnRouter };
// export router;
// export default router;
// export const products = [];
