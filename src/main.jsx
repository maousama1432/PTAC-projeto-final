import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import Registro from './Registro';
import Detalhes from './Detalhes';
import Destaque from './Destaque';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Registro />} />
          <Route path="/Destaque" element={<Destaque />} />
          <Route path="/:id" element={<Detalhes />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
);