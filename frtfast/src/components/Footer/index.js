import React from 'react';
import {NavLink} from 'react-router-dom';
import {MdHome} from 'react-icons/md';
import {FiUserCheck, FiUserPlus} from 'react-icons/fi';
import {FcSurvey} from 'react-icons/fc';

import './footer.css';

export default ({auth})=>{
    if(auth.isLogged && true){
    return(
<footer>
        <nav>
            <ul>   
                <li><NavLink to="/"><MdHome size="2em"></MdHome></NavLink></li>
                <li><NavLink to="/Servicio">Servicio</NavLink></li>
                <li><NavLink to="/Producto">Producto</NavLink></li>
                <li><NavLink to="/agregarservicio">Agregar Servicio</NavLink></li>
                <li><NavLink to="/agregarproducto">Agregar Producto</NavLink></li>
            </ul>
        </nav>
        </footer>
    )
    }else{
    return(
        <footer>
        <nav>
            <ul>
                <li><NavLink to="/"><MdHome size="2em"></MdHome></NavLink></li>
                <li><NavLink to="/Login"><FiUserCheck size="2em"></FiUserCheck></NavLink></li>
                <li><NavLink to="/SignIn"><FiUserPlus size="2em"></FiUserPlus></NavLink></li>
                <li><NavLink to="/Servicio">Servicio</NavLink></li>
                <li><NavLink to="/Producto">Producto</NavLink></li>
                <li><NavLink to="/Encuesta"><FcSurvey size="2em"></FcSurvey></NavLink></li>
               
            </ul>
        </nav>
        </footer>
        
    );
 }
}