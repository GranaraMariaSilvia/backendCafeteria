import mongoose, { Schema } from "mongoose";

const productoSchema = new Schema({
  nombreProducto: {
    type: String,
    maxlength: 100,
    require: true,
    unique: true,
  },

  precioProducto: {
    type: Number,
    require: true,
  },

  categoria: String

},{timestamps:true});

const Producto = mongoose.model('producto',productoSchema);

export default Producto;
