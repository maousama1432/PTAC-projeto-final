import React, { useState } from "react";

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const videosArray = JSON.parse(localStorage.getItem("videos"));
    setVideos(videosArray);
  }, []);

};

export default Home;
