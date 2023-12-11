// Página de registro de novos vídeos
import React, { useState } from 'react';

const Registro = () => {
  // Estados para os campos do formulário
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [url, setUrl] = useState("");
  const [isMusica, setIsMusica] = useState(false);
  const [letra, setLetra] = useState("");

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Cria um novo vídeo com os dados do formulário
    const novoVideo = {
      titulo,
      descricao,
      url,
      isMusica,
      letra,
    };

    // Obtém a lista atual de vídeos do armazenamento local
    const videosArray = JSON.parse(localStorage.getItem("videos")) || [];
    // Adiciona o novo vídeo à lista
    videosArray.push(novoVideo);
    // Atualiza a lista de vídeos no armazenamento local
    localStorage.setItem("videos", JSON.stringify(videosArray));

    // Limpa os campos do formulário
    setTitulo("");
    setDescricao("");
    setUrl("");
    setIsMusica(false);
    setLetra("");
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Registro de Vídeo</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Título:</label>
          <input type="text" className="form-control" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Descrição (máximo 100 caracteres):</label>
          <textarea className="form-control" value={descricao} onChange={(e) => setDescricao(e.target.value)} maxLength="100" />
        </div>
        <div className="mb-3">
          <label className="form-label">URL:</label>
          <input type="url" className="form-control" value={url} onChange={(e) => setUrl(e.target.value)} />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="isMusica" checked={isMusica} onChange={() => setIsMusica(!isMusica)} />
          <label className="form-check-label" htmlFor="isMusica">É uma música</label>
        </div>
        {isMusica && (
          <div className="mb-3">
            <label className="form-label">Letra da Música:</label>
            <textarea className="form-control" value={letra} onChange={(e) => setLetra(e.target.value)} />
          </div>
        )}
        <button type="submit" className="btn btn-primary">Registrar</button>
        <button type="button" className="btn btn-secondary ms-2" onClick={() => {
          setTitulo("");
          setDescricao("");
          setUrl("");
          setIsMusica(false);
          setLetra("");
        }}>Limpar</button>
      </form>
    </div>
  );
};

export default Registro;