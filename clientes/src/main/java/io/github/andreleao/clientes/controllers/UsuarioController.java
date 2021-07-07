package io.github.andreleao.clientes.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import io.github.andreleao.clientes.controllers.exception.UsuarioCadastradoException;
import io.github.andreleao.clientes.models.Usuario;
import io.github.andreleao.clientes.services.UsuarioService;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/usuarios")
public class UsuarioController {

	@Autowired
	private final UsuarioService service;
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public void salvar(@RequestBody @Valid Usuario usuario) {
		 try {
			 this.service.salvar(usuario);
		 } catch(UsuarioCadastradoException e) {
			 throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
		 }
		
	}
}
