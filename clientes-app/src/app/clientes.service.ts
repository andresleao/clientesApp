import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  cliente: Cliente;
  apiURL: string = environment.apiURLBase + '/api/clientes';

  constructor(private http: HttpClient) { 
   this.cliente = { id: null ,nome: '', cpf: '', dataCadastro: '' };
  }

  salvar(cliente: Cliente) : Observable<Cliente> {
    // const tokenString: string | any = localStorage.getItem('access_token');
    // const token = JSON.parse(tokenString);
    // const headers = {
    //   'Authorization': 'Bearer ' + token.access_token
    // }
    return this.http.post<Cliente>(`${this.apiURL}`, cliente);
    //return this.http.post<Cliente>('http://localhost:8080/api/clientes', cliente);
  }

  atualizar(cliente: Cliente) : Observable<any> {
    return this.http.put<Cliente>(`${this.apiURL}/${cliente.id}`, cliente);
    //return this.http.put<Cliente>(`http://localhost:8080/api/clientes/${cliente.id}`, cliente);
  }

  getClientes() : Observable<Cliente[]> {
    // const tokenString: string | any = localStorage.getItem('access_token');
    // const token = JSON.parse(tokenString);
    // const headers = {
    //   'Authorization': 'Bearer ' + token.access_token
    // }
    return this.http.get<Cliente[]>(this.apiURL);
    //return this.http.get<Cliente[]>('http://localhost:8080/api/clientes');
  }

  getClienteById(id: number) : Observable<Cliente> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
    //return this.http.get<any>(`http://localhost:8080/api/clientes/${id}`);
  }

  deletar(cliente: Cliente) : Observable<Cliente> {
    return this.http.delete<any>(`${this.apiURL}/${cliente.id}`);
    //return this.http.delete<any>(`http://localhost:8080/api/clientes/${cliente.id}`);
  }
}
