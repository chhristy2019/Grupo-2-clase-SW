const db = require('../../dao/db');
const ObjectId = require('mongodb').ObjectId;

let serviceColl;


module.exports = class {
    static async initModel(){
        if(!serviceColl){
            let _db = await db.getDB();
            serviceColl = await _db.collection('servicio');
            console.log("Colección de Servicio Asignados!");
            return;
        }else{
            return;
        }
    }

 //Muestra todas los servicios
 static async getAll(){
    try{
      if(serviceColl){
        let registro = await serviceColl.find();
        return registro.toArray();
      }
      return [];
    } catch(err){
      console.log(err);
      return err;
    }
  }

   //Busca un servicio por medio del ID
 static async getone(id) {
    try {
      let filter = { "_id": new ObjectId(id)};
      const result = await serviceColl.findOne(filter);
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

 //Agrega un servicio
  static async newOne( nombreempresa, nombreservicio, descripcion, precio, horario, agregarimagen){ 
    try{  
        const newserv = {nombreempresa:nombreempresa, nombreservicio:nombreservicio, descripcion:descripcion, precio:precio, horario:horario, agregarimagen:agregarimagen};
        const result = await serviceColl.insertOne(newserv);
        return result;
    }catch(err){
        console.log(err);
        return err;
    }
 }

 //Modifica
 /*
 static async updateOne(id) {
    try {
      let filter = { "_id": new ObjectId(id) };
      let update =  { nombreempresa, nombreservicio, descripcion, precio, horario, agregarimagen };
      const result = await serviceColl.updateOne(filter, update);
      return result;
     } catch (err) {
      console.log(err);
      return err;
    }
  } 
  */


 //Elimina un servicio por medio del id
  static async deleteOne(id){
    try{
      let filter = {"_id": new ObjectId(id)};
      const result = await serviceColl.deleteOne(filter);
      return result;
    }catch(err){
      console.log(err);
      return err;
    }
  }

}//class
