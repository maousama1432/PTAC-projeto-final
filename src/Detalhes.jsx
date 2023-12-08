import React from 'react';

const Detalhes = ({ video }) => {
  const tipoMedia = video.tipo || 'Vídeo';

  return (
    <div>
      <h2>Detalhes do {tipoMedia}</h2>
      <h3>{video.titulo}</h3>
      <p>{video.descricao}</p>
      {tipoMedia === 'Música' ? (
        <p>Letra da Música...</p>
      ) : (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${video.url.slice(17)}`}
          title={video.titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default Detalhes;