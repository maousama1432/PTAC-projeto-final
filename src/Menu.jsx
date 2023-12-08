import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ videos }) => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cadastro">Cadastro</Link></li>
        <li><Link to="/destaque">Destaque</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;