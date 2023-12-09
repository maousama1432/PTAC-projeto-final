import React, { useState } from 'react';

const Card = ({ titulo, descricao, url, isMusica, letra }) => {
  const [mostrarLetra, setMostrarLetra] = useState(false);

  return (
    <div className="card">
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${url.slice(17)}`}
        title={titulo}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {isMusica && (
        <div>
          <button onClick={() => setMostrarLetra(!mostrarLetra)}>Mostrar Letra</button>
          {mostrarLetra && <p>{letra}</p>}
        </div>
      )}
    </div>
  );
};

export default Card;