const express = require('express');
let router = express.Router();
const model = require('./categoria.model');

const init = async ()=>{
    await model.initModel();
}
init();

router.get('/', async (req, res)=>{
    try{
        let category = await model.getAll();
        res.status(200).json(category);
    }catch (err){
        console.log(err);
        res.status(500).json({"Error":"Algo salio Mal intentar de nuevo."});
    }
}); //get /

router.get('/all/:id', async (req, res)=>{
    try{
        let {id} = req.params;
        let category = await model.getAlls(id);
        res.status(200).json(category);
    }catch(err){
      console.log(err);
      res.status(500).json({ "Error": "Algo Sucedio Mal intentar de nuevo." });
    }
  }); //get all/:id

router.post('/new' , async (req, res)=>{
    try{
        let {numerocategoria, nombrecategoria} = req.body;
        const rslt = await model.addOne(numerocategoria, nombrecategoria);
        res.status(200).json(rslt);
    }catch (err){
        console.log(err);
        res.status(500).json({"Error":"Algo salio Mal intentar de nuevo."});
    }
  }); //post /new

  

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
