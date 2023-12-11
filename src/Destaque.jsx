// Página de destaque que exibe os últimos quatro vídeos
import React from 'react';
import Card from './Card';

const Destaque = () => {
  // Obtém a lista de vídeos do armazenamento local
  const videos = JSON.parse(localStorage.getItem('videos')) || [];

  // Lógica para obter os quatro últimos vídeos
  const ultimosQuatroVideos = videos.slice(-4);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Destaque</h2>
      <div className="row row-cols-2">
        {ultimosQuatroVideos.map((video) => (
          <div key={video.id} className="col mb-4">
            <Card titulo={video.titulo} descricao={video.descricao} url={video.url} isMusica={video.isMusica} letra={video.letra} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destaque;