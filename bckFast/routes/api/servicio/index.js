//Rutas de la Entidad Servicio
const express = require('express');
let router = express.Router();
const model = require('./service.model');

 const init = async ()=>{
    await model.initModel();
 }
 init();

 router.get('/', async (req, res)=>{
    try{
        let Servicio = await model.getAll();
        res.status(200).json(Servicio);
    }catch (err){
        console.log(err);
        res.status(500).json({"Error":"Algo salio Mal intentar de nuevo."});
    }
 }); //get /

 router.get('/one/:id', async (req, res)=>{
    try{
        let {id} = req.params;
        let servicio = await model.getone(id);
        res.status(200).json(servicio);
    }catch(err){
      console.log(err);
      res.status(500).json({ "Error": "Algo Sucedio Mal intentar de nuevo." });
    }
  }); //get one/:id

 router.post('/new', async(req, res)=>{
    try{
        let {nombreempresa, nombreservicio, descripcion, precio, horario, agregarimagen} = req.body;
        const rslt = await model.newOne(nombreempresa, nombreservicio, descripcion, precio, horario, agregarimagen);
        res.status(200).json(rslt);
    }catch (err){
        console.log(err);
        res.status(500).json({"Error":"Algo salio Mal intentar de nuevo."});
    }
 });//post /new

 

  router.put('/one/:id', async (req, res)=>{
   res.status(403).json({"msg":"No implementado"});
  });// put one/:id
  
 router.delete ('/one/:id', async (req, res)=>{
    try {
        const {id} = req.params;
        const result = await model.deleteOne(id);
        res.status(200).json(result);
    }catch(err){
      console.log(err);
      res.status(500).json({ "Error": "Algo Sucedio Mal intentar de nuevo." });
    }
  });// delete /one/:id

module.exports = router;