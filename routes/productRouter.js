import express from "express";
import { getProducts,createProducts,deleteProduct ,getProductByName} from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.get("/", getProducts);

productRouter.get("/:name", getProductByName);

productRouter.post("/",createProducts);

productRouter.delete("/:name",deleteProduct);

export default productRouter;