# Assessment Product API

A simple RESTful Product API for an e-commerce platform, built with Node.js and Express.

This project uses Node.js as the runtime environment and Express.js as the web application framework. This project implements a simple RESTful Product API using Node.js and Express. It supports listing all products, retrieving a product by ID, filtering by category, and adding new products with validation. The API uses a local JSON file as its data source for demonstration and testing purposes.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   node server.js
   ```
   The server will run on `http://localhost:5000` by default.

## Endpoints

### 1. Get All Products

- **URL:** `/products`
- **Method:** `GET`
- **Query Params:**
  - `category` (optional): Filter products by category (case-insensitive)
- **Response:** `200 OK`

```json
[
  { "id": 1, "name": "T-Shirt", "price": 19.99, "category": "Apparel" },
  { "id": 2, "name": "Sneakers", "price": 49.99, "category": "Footwear" }
]
```

- **Example:**
  - `GET /products?category=Apparel`

---

### 2. Get Product by ID

- **URL:** `/products/:id`
- **Method:** `GET`
- **Response:** `200 OK`

```json
{ "id": 1, "name": "T-Shirt", "price": 19.99, "category": "Apparel" }
```

- **Error:** `404 Not Found` if product does not exist

---

### 3. Create a New Product

- **URL:** `/products`
- **Method:** `POST`
- **Body:** (JSON)

```json
{
  "name": "Hat",
  "price": 15.99,
  "category": "Apparel"
}
```

- **Response:** `201 Created`

```json
{
  "id": 4,
  "name": "Hat",
  "price": 15.99,
  "category": "Apparel"
}
```

- **Error:** `400 Bad Request` if required fields are missing

---

## Data Source

- Products are stored in `data/products.json` as an array of objects.

## Example cURL Requests

- Get all products:
  ```bash
  curl http://localhost:5000/products
  ```
- Get products by category:
  ```bash
  curl "http://localhost:5000/products?category=Apparel"
  ```
- Get product by ID:
  ```bash
  curl http://localhost:5000/products/1
  ```
- Create a new product:
  ```bash
  curl -X POST -H "Content-Type: application/json" -d '{"name":"Hat","price":15.99,"category":"Apparel"}' http://localhost:5000/products
  ```
