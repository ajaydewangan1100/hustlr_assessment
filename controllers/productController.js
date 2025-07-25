const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname, "../data/products.json");

function readProducts() {
  const data = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(data);
}

function writeProducts(products) {
  fs.writeFileSync(dataPath, JSON.stringify(products, null, 2));
}

exports.getProducts = (req, res) => {
  let products = readProducts();
  if (req.query.category) {
    products = products.filter(
      (p) => p.category.toLowerCase() === req.query.category.toLowerCase()
    );
  }
  res.json(products);
};

exports.getProductById = (req, res) => {
  const products = readProducts();
  const product = products.find((p) => p.id == req.params.id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
};

exports.createProduct = (req, res) => {
  const { name, price, category } = req.body;
  if (!name || !price || !category) {
    return res
      .status(400)
      .json({ message: "Name, price, and category are required." });
  }
  const products = readProducts();
  const newProduct = {
    id: products.length ? products[products.length - 1].id + 1 : 1,
    name,
    price,
    category,
  };
  products.push(newProduct);
  writeProducts(products);
  res.status(201).json(newProduct);
};
