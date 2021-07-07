import { Cliente } from "../../clientes/cliente";

export class ServicoPrestadoBusca {
  descricao: string;
  valor: number|null;
  data: string;
  cliente: Cliente|null;

  constructor(descricao: string, valor: number|null, data: string, cliente: Cliente|null) {
    this.descricao = descricao;
    this.valor = valor;
    this.data = data;
    this.cliente = cliente;
  }
}

