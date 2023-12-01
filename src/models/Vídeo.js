export default class Vídeo {
    constructor(titulo, descricao, url) {
      this.titulo = titulo;
      this.descricao = descricao;
      this.url = url;
      this.id = Date.now();
    }
  }
  