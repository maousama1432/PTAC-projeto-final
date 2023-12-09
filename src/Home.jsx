import React, { useState, useEffect } from 'react';
import Card from './Card';

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const videosArray = JSON.parse(localStorage.getItem('videos')) || [];
    setVideos(videosArray);
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Home</h2>
      <div className="row row-cols-2">
        {videos.map((video) => (
          <div key={video.id} className="col mb-4">
            <Card titulo={video.titulo} descricao={video.descricao} url={video.url} isMusica={video.isMusica} letra={video.letra} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;