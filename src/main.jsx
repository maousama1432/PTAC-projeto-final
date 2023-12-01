import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Registro from './components/Registro';
import Destaque from './Destaque';
import Menu from './Menu';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Menu videos={videos} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Registro />} />
          <Route path="/destaque" element={<Destaque />} />
          <Route path="/:id" element={<Detalhes />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
);