const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  //getProductByType,
} = require("../controller/productControllers");

router.get("/", getAllProducts);

router.get("/:id", getProductById);

//router.get("/:type", getProductByType);

module.exports = router;
