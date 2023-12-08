import React from "react";

const Menu = ({ videos }) => {
  return (
    <div>
      <h2>Menu</h2>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/cadastro">Cadastro</a>
        </li>
        <li>
          <a href="/destaque">Destaque</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;