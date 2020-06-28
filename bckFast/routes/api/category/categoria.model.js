const db = require('../../dao/db');
const ObjectId = require('mongodb').ObjectId;

let categoriaColl;

module.exports = class {
    static async initModel(){
        if(!categoriaColl){
            let _db = await db.getDB();
            categoriaColl = await _db.collection('category');
            console.log("Colección de Category Asignados!");
            return;
        }else{
            return;
        }
    }

 //Muestra todas las categorias
 static async getAll(){
    try{
      if(categoriaColl){
        let registro = await categoriaColl.find();
        return registro.toArray();
      }
      return [];
    } catch(err){
      console.log(err);
      return err;
    }
  }

 //Insertar una nueva categoria
    static async addOne( numerocategoria, nombrecategoria){ 
        try{
            const newcat = {numerocategoria:numerocategoria, nombrecategoria:nombrecategoria};
            const result = await categoriaColl.insertOne(newcat);
            return result;
        }catch(err){
            console.log(err);
            return err;
        }
    } 


 //Busca a la categoria por medio del ID
    static async getAlls(id) {
        try {
          let filter = { "_id": new ObjectId(id)};
          const result = await categoriaColl.findOne(filter);
          return result;
        } catch (err) {
          console.log(err);
          return err;
        }
      }

    
 //Elimina una categoria por medio del id
    static async deleteOne(id){
        try{
          let filter = {"_id": new ObjectId(id)};
          const result = await categoriaColl.deleteOne(filter);
          return result;
        }catch(err){
          console.log(err);
          return err;
        }
      }
    
      

}//class

