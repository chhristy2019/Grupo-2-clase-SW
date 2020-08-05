import  { paxios } from '../../../utilities/axios';

export const obtenerProducto = async()=>{
  try{
    let { data } = await paxios.get('/api/producto');
    console.log(data);
    return data;
  }catch(e){
    throw(e);
  }
}

export const obtenerProductosById = async(id)=>{
  try{
    let { data } = await paxios.get(`/api/producto/one/${id}`);
    console.log(data);
    return data;
  }catch(e){
    throw(e);
  }
}

export const obtenerNuevoProducto = async (nombreempresa, nombreproducto, descripcion, precio, horario, contacto)=>{
  try
  {
      const {data} = await paxios.post(
          "/api/producto/new",
          {
              nombreempresa:nombreempresa,
              nombreproducto:nombreproducto,
              descripcion:descripcion,
              precio:precio,
              horario:horario,
              contacto:contacto
          }
      );
         return data;
  }catch(e){

      throw(e);
  }
}
