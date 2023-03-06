import express from "express";
import {
  viewProds,
  getIndex,
  userDetails,
  login,
  viewUser,
} from "../controllers/shop.js";

const shopRouter = express.Router();

shopRouter.get("/", getIndex);
shopRouter.get("/users", viewProds);
shopRouter.get("/users/:userId", viewUser); // Ruta iz koje prosledjujemo parametar userId
shopRouter.get("/editUser", userDetails);
shopRouter.get("/login", login);

export { shopRouter };
