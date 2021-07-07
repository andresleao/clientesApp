export class ServicoPrestado {
  descricao: string;
  preco: string;
  data: string;
  idCliente: number|null;

  constructor(descricao: string, preco: string, data: string, idCliente: number|null) {
    this.descricao = descricao;
    this.preco = preco;
    this.data = data;
    this.idCliente = idCliente;
  }

}

