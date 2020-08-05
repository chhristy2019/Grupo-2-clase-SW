import {naxios, paxios, setJWT} from '../../../utilities/axios';

export const getServicio = async () => {
    const url = '/api/servicio';
    try{
        let result = await naxios.get(url);
        return result;
    }
    catch(e){
        throw e;
    }
}

export const getPrivateServicio= async () => {
    const url = '/api/servicio/private';
    try{
        let result = await paxios.get(url);
        return result;
    }
    catch(e){
        throw e;
    }
}

export const getProducto = async () => {
    const url = '/api/producto';
    try{
        let result = await naxios.get(url);
        return result;
    }
    catch(e){
        throw e;
    }
}

export const getPrivateProducto= async () => {
    const url = '/api/producto/private';
    try{
        let result = await paxios.get(url);
        return result;
    }
    catch(e){
        throw e;
    }
}