import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../clientes/cliente';
import { ClientesService } from '../../clientes.service';
import { ServicoPrestado } from '../servicoPrestado';
import { ServicoPrestadoService } from '../../servico-prestado.service';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: Cliente[] = [];
  servico: ServicoPrestado;
  success: boolean = false;
  errors: string[] = [];

  constructor(
    private clientesService: ClientesService,
    private servicoPrestadoService: ServicoPrestadoService
  ) {
    this.servico = {descricao: '', preco: '', data: '', idCliente: null};
    }

  ngOnInit(): void {
    this.clientesService.getClientes().subscribe(response => this.clientes = response);
  }

  onSubmit() {
    this.servicoPrestadoService.salvar(this.servico)
    .subscribe( response => {
      this.success = true;
      this.errors = [];
      this.servico = new ServicoPrestado('', '', '', null);
    }, errorResponse => {
      this.success = false;
      this.errors = errorResponse.error.errors;
    });
  }

}
