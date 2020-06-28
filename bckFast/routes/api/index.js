//Función de Conmutador de Entidades del Api
var express= require('express');
var router = express.Router();

var secRoutes = require('./sec');
var servicioRoutes = require('./servicio');
var categoryRoutes = require('./category');



router.use("/sec", secRoutes);
router.use("/servicio", servicioRoutes); 
router.use("/category", categoryRoutes); //Coleccion del cliente de mongo


module.exports = router;
