import React from 'react';

const Menu = ({ videos }) => {
  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {videos.map((video) => (
          <li key={video.id}>
            <a href={`//${video.id}`}>{video.titulo}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;