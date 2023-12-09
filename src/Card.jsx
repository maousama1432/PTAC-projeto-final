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
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="offcanvas"
            data-bs-target="#letraOffcanvas"
            aria-controls="letraOffcanvas"
            onClick={() => setMostrarLetra(!mostrarLetra)}
          >
            Mostrar Letra
          </button>

          <div className="offcanvas offcanvas-end" tabIndex="-1" id="letraOffcanvas" aria-labelledby="letraOffcanvasLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="letraOffcanvasLabel">Letra da Música</h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Fechar"></button>
            </div>
            <div className="offcanvas-body">
              {mostrarLetra && <p>{letra}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;