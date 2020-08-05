//Rutas de la Entidad producto
const express = require('express');
let router = express.Router();
const model = require('./product.model');

 const init = async ()=>{
    await model.initModel();
 }
 init();

 router.get('/', async (req, res)=>{
    try{
        let producto = await model.getAll();
        res.status(200).json(producto);
    }catch (err){
        console.log(err);
        res.status(500).json({"Error":"Algo salio Mal intentar de nuevo."});
    }
 }); //get /

 router.get('/one/:id', async (req, res)=>{
    try{
        let {id} = req.params;
        let producto = await model.getone(id);
        res.status(200).json(producto);
    }catch(err){
      console.log(err);
      res.status(500).json({ "Error": "Algo Sucedio Mal intentar de nuevo." });
    }
  }); //get one/:id

 router.post('/new', async(req, res)=>{
    try{
        let {nombreempresa, nombreproducto, descripcion, precio, horario, contacto} = req.body;
        const rslt = await model.newOne(nombreempresa, nombreproducto, descripcion, precio, horario, contacto);
        res.status(200).json(rslt);
    }catch (err){
        console.log(err);
        res.status(500).json({"Error":"Algo salio Mal intentar de nuevo."});
    }
 });//post /new

 
 
  router.put('/one/:id', async (req, res)=>{
    try{
      let {id} = req.params;
      let{nombreempresa, nombreproducto, descripcion, precio, horario, contacto}= req.body;
      const rlst = await model.updateOne(id, nombreempresa, nombreproducto, descripcion, precio, horario, contacto);
      res.status(200).json(rlst);
    }catch(err){
      console.log(err);
      res.status(500).json({ "Error": "Algo Sucedio Mal intentar de nuevo." });
    }
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