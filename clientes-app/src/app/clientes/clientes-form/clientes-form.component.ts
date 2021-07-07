import { ClientesService } from './../../clientes.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  errors: string[] = [];
  id: number | null = null;

  constructor(
    private service: ClientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
   this.cliente = {id: null ,nome: '', cpf: '', dataCadastro: '' };
  }

  ngOnInit(): void {
    let params: Observable<any> = this.activatedRoute.params;
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.service.getClienteById(this.id)
          .subscribe(
            response => this.cliente = response,
            errorResponse => this.cliente = new Cliente(null , '',  '',  '' )
          )
      }   
    });

    // this.activatedRoute.params.subscribe(cliente => {
    //   if (cliente && cliente.id) {
    //       this.service.getClienteById(cliente.id).subscribe(response => {
    //           this.cliente = response;
    //       });
    //   }
    // });
  }

  onSubmit() {
    if (this.id) {
      this.service.atualizar(this.cliente)
        .subscribe(response => {
          this.success = true;
          this.errors = [];
        }, errorResponse => {
          this.errors = ['Erro ao atualizar o cliente'];
        });
    } else {
      this.service.salvar(this.cliente)
      .subscribe( response => {
        this.success = true;
        this.cliente = response;
        this.errors = [];
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      });
    } 
  }

  voltarParaListagem() {
    this.router.navigate(['/clientes/lista']);
  }

}
