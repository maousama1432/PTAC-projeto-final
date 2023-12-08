import React from 'react';
import Card from './Card';

const Destaque = ({ videos }) => {
  // Lógica para obter os quatro últimos vídeos
  const ultimosQuatroVideos = videos.slice(-4);

  return (
    <div>
      <h2>Destaque</h2>
      {ultimosQuatroVideos.map((video) => (
        <Card key={video.id} titulo={video.titulo} descricao={video.descricao} url={video.url} />
      ))}
    </div>
  );
};

export default Destaque;

