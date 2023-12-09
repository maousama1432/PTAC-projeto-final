import React, { useState } from 'react';

const Registro = () => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [url, setUrl] = useState('');
  const [isMusica, setIsMusica] = useState(false);
  const [letra, setLetra] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isMusica && !letra) {
      alert('A letra é obrigatória para músicas.');
      return;
    }

    const novoVideo = {
      titulo,
      descricao: descricao.slice(0, 100), // Limita a descrição a 100 caracteres
      url,
      isMusica,
      letra: isMusica ? letra : '',
    };

    const videosArray = JSON.parse(localStorage.getItem('videos')) || [];
    videosArray.push(novoVideo);
    localStorage.setItem('videos', JSON.stringify(videosArray));

    setTitulo('');
    setDescricao('');
    setUrl('');
    setIsMusica(false);
    setLetra('');
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Registro de Vídeo</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Título:</label>
          <input type="text" className="form-control" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Descrição:</label>
          <textarea className="form-control" value={descricao} onChange={(e) => setDescricao(e.target.value)} maxLength="100" required />
        </div>
        <div className="mb-3">
          <label className="form-label">URL:</label>
          <input type="url" className="form-control" value={url} onChange={(e) => setUrl(e.target.value)} required />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" checked={isMusica} onChange={() => setIsMusica(!isMusica)} />
          <label className="form-check-label">É uma música?</label>
        </div>
        {isMusica && (
          <div className="mb-3">
            <label className="form-label">Letra:</label>
            <textarea className="form-control" value={letra} onChange={(e) => setLetra(e.target.value)} required />
          </div>
        )}
        <button type="submit" className="btn btn-primary">Registrar</button>
        <button type="button" className="btn btn-secondary" onClick={() => {
          setTitulo('');
          setDescricao('');
          setUrl('');
          setIsMusica(false);
          setLetra('');
        }}>Limpar</button>
      </form>
    </div>
  );
};

export default Registro;