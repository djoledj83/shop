import { Product } from "../models/product.js";

let getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    //Ovde setujemo putanju do foldera
    pageTitle: "Add Prodct",
    path: "/admin/add-product",
    activeAddProduct: true,
  });
};

let postAddProduct = (req, res, next) => {
  let product = new Product(
    req.body.title,
    req.body.description,
    req.body.l_picture
  );
  // console.log(product);
  product.save();

  res.redirect("/");
};

let adminProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      //Ovde setujemo putanju do foldera
      prods: products,
      pageTitle: "Admin Products",
      path: "/admin/products",
    });
  });
};

export { getAddProduct, postAddProduct, adminProducts };
