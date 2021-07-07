package io.github.andreleao.clientes.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import io.github.andreleao.clientes.controllers.exception.UsuarioCadastradoException;
import io.github.andreleao.clientes.models.Usuario;
import io.github.andreleao.clientes.repositories.UsuarioRepository;

@Service
public class UsuarioService implements UserDetailsService {

	@Autowired
	private UsuarioRepository repository;
	
	public Usuario salvar(Usuario usuario) {
		boolean usuarioExistente = this.repository.existsByUsername(usuario.getUsername());
		
		if (usuarioExistente) {
			throw new UsuarioCadastradoException(usuario.getUsername());
		}
		
		return this.repository.save(usuario);
	}
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Usuario usuario = this.repository.findByUsername(username)
				.orElseThrow(() -> new UsernameNotFoundException("Login não encontrado."));
		
		// Convertendo Usuario usuario em um UserDetails:
		return User
				.builder()
				.username(usuario.getUsername())
				.password(usuario.getPassword())
				.roles("USER")
				.build();
	}

}
