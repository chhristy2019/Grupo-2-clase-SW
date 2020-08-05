const db = require('../../dao/db');
const ObjectId = require('mongodb').ObjectId;

let productColl;


module.exports = class {
    static async initModel(){
        if(!productColl){
            let _db = await db.getDB();
            productColl = await _db.collection('producto');
            console.log("Colección de Producto Asignados!");
            return;
        }else{
            return;
        }
    }

 //Muestra todas los productos
 static async getAll(){
    try{
      if(productColl){
        let registro = await productColl.find();
        return registro.toArray();
      }
      return [];
    } catch(err){
      console.log(err);
      return err;
    }
  }

   //Busca un producto por medio del ID
 static async getone(id) {
    try {
      let filter = { "_id": new ObjectId(id)};
      const result = await productColl.findOne(filter);
      return result;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

 //Agrega un producto
  static async newOne( nombreempresa, nombreproducto, descripcion, precio, horario, contacto){ 
    try{  
        const newserv = {nombreempresa:nombreempresa, nombreproducto:nombreproducto, descripcion:descripcion, precio:precio, horario:horario, contacto:contacto};
        const result = await productColl.insertOne(newserv);
        return result;
    }catch(err){
        console.log(err);
        return err;
    }
 }

 //Modifica un producto
 
 static async updateOne(id, nombreempresa, nombreproducto, descripcion, precio, horario, contacto) {
  try {
    let filter = {"_id": new ObjectId(id)};
    let update = { "$set":{"nombreempresa":nombreempresa, "nombreproducto":nombreproducto, "descripcion":descripcion, "precio":precio, "horario":horario, "contacto":contacto}};
    const result = await productColl.updateOne(filter,update);
    return result;
  }catch(err){
    console.log(err);
    return err;
  }
}


 //Elimina un producto por medio del id
  static async deleteOne(id){
    try{
      let filter = {"_id": new ObjectId(id)};
      const result = await productColl.deleteOne(filter);
      return result;
    }catch(err){
      console.log(err);
      return err;
    }
  }

}//class
