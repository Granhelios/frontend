/**
 * La barra de navegacion superior
 */
import { NavLink } from 'react-router-dom';
import React from 'react';

export default function NavBarComponent() {
    return(
        <div className="topnav">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/CRUD">Manejar Calles</NavLink>
            <NavLink to="/visualizar">Ver Calles</NavLink>
        </div>
    );
}