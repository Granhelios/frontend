
import './App.css';

import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import BienvenidaComponent from './GUI/BienvenidaComponent';
import NavBarComponent from './GUI/NavBarComponent';
import CallesExistentesComponent from './GUI/CallesExistentesComponent';
import CRUDBase from './GUI/CRUDCallesComponent';


function App() {
  return (

    <>

        <BrowserRouter>
        <Routes>

          <Route path="/" element={<BienvenidaComponent />}/>

          <Route path="/visualizar" element={<CallesExistentesComponent />} />

          <Route path="/CRUD" element={<CRUDBase />} />


        </Routes>
    </BrowserRouter>

    </>

  );
}

export default App;
