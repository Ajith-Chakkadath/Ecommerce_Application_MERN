import express from "express";
import { getAllProducts , newProduct } from "../controllers/productController.js";

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/admin/products").post(newProduct);

export default router;
