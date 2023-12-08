import React from 'react';

const Detalhes = ({ video }) => {
  return (
    <div>
      <h2>Detalhes do Vídeo</h2>
      <h3>{video.titulo}</h3>
      <p>{video.descricao}</p>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${video.url.slice(17)}`}
        title={video.titulo}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Detalhes;