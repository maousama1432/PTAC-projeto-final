import React, { useState } from "react";

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const videosArray = JSON.parse(localStorage.getItem("videos"));
    setVideos(videosArray);
  }, []);

  return (
    <div>
      <h2>Home</h2>
      {videos.map((video) => (
        <div key={video.id}>
          <h3>{video.titulo}</h3>
          <p>{video.descricao}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
