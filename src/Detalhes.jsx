// Página de detalhes do vídeo, com a opção de exibir a letra da música
import React from 'react';
import { useSpring, animated } from 'react-spring';

const Detalhes = ({ video }) => {
    // Define o tipo de mídia com base na propriedade 'tipo' ou assume 'Vídeo's
  const tipoMedia = video.tipo || 'Vídeo';
  const animationProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={animationProps}>
      <div className="container mt-4">
        <h2 className="mb-3">Detalhes do {tipoMedia}</h2>
        <h3>{video.titulo}</h3>
        <p>{video.descricao}</p>
        {tipoMedia === 'Música' && video.letra && (
          <div>
            <h4>Letra da Música</h4>
            <p>{video.letra}</p>
          </div>
        )}
        {tipoMedia !== 'Música' && (
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${video.url.slice(17)}`}
            title={video.titulo}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </animated.div>
  );
};

export default Detalhes;