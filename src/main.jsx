import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Registro from './Registro';
import Destaque from './Destaque';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Registro />} />
        <Route path="/destaque" element={<Destaque />} />
        <Route path="/:id" element={<Detalhes />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);