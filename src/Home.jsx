import React from 'react';
import Card from './Card';

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const videosArray = JSON.parse(localStorage.getItem('videos'));
    setVideos(videosArray);
  }, []);

  return (
    <div>
      <h2>Home</h2>
      {videos.map((video) => (
        <Card key={video.id} titulo={video.titulo} descricao={video.descricao} url={video.url} />
      ))}
    </div>
  );
};

export default Home;