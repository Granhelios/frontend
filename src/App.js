
import './App.css';

import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import BienvenidaComponent from './GUI/BienvenidaComponent';
import CallesExistentesComponent from './GUI/CallesExistentesComponent';
import CRUDBase2 from './GUI/CRUDCallesComponent2';


function App() {
  return (

    <>

        <BrowserRouter>
        <Routes>

          <Route path="/" element={<BienvenidaComponent />}/>

          <Route path="/visualizar" element={<CallesExistentesComponent />} />

          <Route path="/CRUD2" element={<CRUDBase2 />} />


        </Routes>
    </BrowserRouter>

    </>

  );
}

export default App;
