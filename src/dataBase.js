import mongoose from 'mongoose';

const url ='mongodb+srv://mariasilvia:buscandoaromeo@cluster0.ne88u.mongodb.net/test'; //cadena de conexion base de datos

mongoose.connect(url,{
    useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify:true
})

const conexion = mongoose.connection;

conexion.once('open', ()=>{
    console.log('Base de Datos CONECTADA')
})