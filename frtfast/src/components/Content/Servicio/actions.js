import  { paxios } from '../../../utilities/axios';

export const obtenerServicio = async()=>{
  try{
    let { data } = await paxios.get('/api/servicio');
    console.log(data);
    return data;
  }catch(e){
    throw(e);
  }
}

export const obtenerServiciosById = async(id)=>{
  try{
    let { data } = await paxios.get(`/api/servicio/one/${id}`);
    console.log(data);
    return data;
  }catch(e){
    throw(e);
  }
}

export const obtenerNuevoServicio = async (nombreempresa, nombreservicio, descripcion, precio, horario, contacto)=>{
  try
  {
      const {data} = await paxios.post(
          "/api/servicio/new",
          {
              nombreempresa:nombreempresa,
              nombreservicio:nombreservicio,
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
