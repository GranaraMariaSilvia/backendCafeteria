import express from 'express';
import morgan from 'morgan';
import cors from 'express';
import path from 'path';
import './dataBase';
import productoRouter from './routes/producto.routes';
const app = express();

//middelwares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json())//ayuda a entender el formato json estos dos juntos
app.use(express.urlencoded({extender:true}));
//para poder acceder a la carpeta public
app.use(express.static(path.join(__dirname,'../public')))

//creamos una variable port para que tome el puerto que me de el servidor o sino tome el puerto 4000
app.set("port", process.env.PORT || 4000);

//defino mi ruta
app.use('/api/cafeteria', productoRouter);
 

//escucho el puerto 400
app.listen(app.get("port"), () => {
  console.log("estoy escuchando el puerto " + app.get("port"));
  console.log(path.join(__dirname,'../public'))
});


