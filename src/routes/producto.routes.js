import { Router } from "express";
import productoControllers from "../controllers/producto.controllers";

const {
  getProductos,
  crearProducto,
  getUnProducto,
  deleteProducto,
  editarProducto,
} = productoControllers;

const router = Router();

router.route("/").get(getProductos).post(crearProducto);

router
  .route("/:id")
  .get(getUnProducto)
  .delete(deleteProducto)
  .put(editarProducto);

export default router;
