package io.github.andreleao.clientes.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import io.github.andreleao.clientes.models.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

	Optional<Usuario> findByUsername(String username);
	
	// select count(*) > 0 from usuario where username = :login
	boolean existsByUsername(String username);
}
