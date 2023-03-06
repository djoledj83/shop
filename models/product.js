import fs from "fs";
import path from "path";
const p = path.join("data", "products.json");

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

class Product {
  constructor(title, desc, link) {
    this.title = title;
    this.desc = desc;
    this.link = link;
  }

  save() {
    this.id = Math.round(Math.random() * 100);
    getProductsFromFile((products) => {
      products.push({
        id: this.id,
        title: this.title,
        desc: this.desc,
        link: this.link,
      });
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findById(id, cb) {
    getProductsFromFile((products) => {
      const user = products.find((p) => p.id === id);
      cb(user);
    });
  }
}

export { Product };
