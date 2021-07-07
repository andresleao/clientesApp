import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioLogin } from './usuarioLogin';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  //loginError: boolean = false;
  cadastrando: boolean = false;
  mensagemSucesso: string | null = null;
  errors: String[] = [];

  constructor(private router: Router, private authService: AuthService) { }

 onSubmit() {
   this.authService.tentarLogar(this.username, this.password)
                    .subscribe(response => {
                      const access_token = JSON.stringify(response);
                      localStorage.setItem('access_token', access_token);
                      this.router.navigate(['/home']);
                    }, errorReponse => {
                      this.errors = ['Usuário e/ou senha incorreto(s).'];
                    });
}

 prepararCadastro(event: any) {
  event.preventDefault();
  this.cadastrando = true;
 }

 cancelarCadastro() {
   this.cadastrando = false; 
 }

 cadastrar() {
   const usuario: UsuarioLogin = new UsuarioLogin(this.username, this.password);
   
   this.authService.salvar(usuario)
    .subscribe(response => {
      this.mensagemSucesso = "Cadastro realizado com sucesso! Efetue o login.";
      this.cadastrando = false;
      this.username = '';
      this.password = '';
      this.errors = [];
    }, errorResponse => {
      this.mensagemSucesso = null;
      this.errors = errorResponse.error.errors;
    }
  );
 }

}
