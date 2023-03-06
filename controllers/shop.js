// import { products } from "../routes/admin.js";

import { closeSync } from "fs";
import { Product } from "../models/product.js";

let viewProds = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      //Ovde setujemo putanju do foldera
      prods: products,
      pageTitle: "Users",
      path: "/users",
    });
  });
};

let getIndex = (req, res, next) => {
  res.render("shop/index", {
    pageTitle: "Index",
    path: "/",
  });
};

let userDetails = (req, res, next) => {
  res.render("shop/product-details", {
    pageTitle: "Edit User",
    path: "/editUser",
  });
};

let viewUser = (req, res, next) => {
  const idUser = req.params.userId; // Prihvatanje parametra iz routa userId
  Product.findById(idUser, (user) => {
    res.render("shop/view-user", {
      //Ovde setujemo putanju do foldera
      user: user,
      pageTitle: user.title,
      path: "/users",
    });
  });
  // res.redirect("/");
};

let login = (req, res, next) => {
  res.render("shop/login", {
    pageTitle: "Login",
    path: "/login",
  });
};

export { viewProds, getIndex, userDetails, viewUser, login };
// export { getAddProduct };
