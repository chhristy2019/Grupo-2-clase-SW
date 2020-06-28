//Rutas de la Entidad de Seguridad
var express = require('express');
var router = express.Router();

 router.post('/login', async (req, res)=>{
    res.status(403).json({"msg":"No implementado"});
   });// login


 router.post('/signin', async (req, res)=>{
    res.status(403).json({"msg":"No implementado"});
   });// signin

module.exports = router;