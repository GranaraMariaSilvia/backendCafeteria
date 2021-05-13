const cafeteriaCtrl = {};
import Producto from "../models/producto";

cafeteriaCtrl.getUnProducto = async (req, res) => {
  try {
    console.log(req.params.id);
    const productoEncontrado = await Producto.findById(req.params.id);
    res.status(200).json(productoEncontrado);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "ocurrio un error" });
    next(error);
  }
};

cafeteriaCtrl.getProductos = async (req, res) => {
  try {
    const datos = await Producto.find(); //este metodo me trae todos los documentos
    res.status(200).json(datos);
  } catch (error) {
    console.log(error);
  }
};

cafeteriaCtrl.crearProducto = async (req, res) => {
  console.log(req.body);
  const { nombreProducto, precioProducto, categoria } = req.body;

  try {
    const productoNuevo = new Producto({
      nombreProducto: nombreProducto,
      precioProducto: precioProducto,
      categoria: categoria,
    });
    await productoNuevo.save();
    res.status(201).json({ mensaje: "llego el producto" });
  } catch (error) {
    console.log(error);
  }
};

cafeteriaCtrl.deleteProducto = async (req, res) => {
  try {
    await Producto.findByIdAndDelete(req.params.id);
    res.status(200).json({ mensaje: "se elimino un producto" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "ocurrio un error" });
    next(error);
  }
};

cafeteriaCtrl.editarProducto = async (req, res) => {
  try {
    await Producto.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ mensaje: "El producto se actualizo" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "ocurrio un error" });
    next(error);
  }
};

export default cafeteriaCtrl;
