import React, { useState } from 'react';

const Registro = () => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoVideo = {
      titulo,
      descricao,
      url,
    };

    const videosArray = JSON.parse(localStorage.getItem("videos")) || [];
    videosArray.push(novoVideo);
    localStorage.setItem("videos", JSON.stringify(videosArray));

    setTitulo("");
    setDescricao("");
    setUrl("");
  };

  return (
    <div>
      <h2>Registro de Vídeo</h2>
      <form onSubmit={handleSubmit}>
        <label>Título:</label>
        <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        <label>Descrição:</label>
        <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} />
        <label>URL:</label>
        <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} />
        <button type="submit">Registrar</button>
        <button type="button" onClick={() => {
          setTitulo("");
          setDescricao("");
          setUrl("");
        }}>Limpar</button>
      </form>
    </div>
  );
};

export default Registro;
