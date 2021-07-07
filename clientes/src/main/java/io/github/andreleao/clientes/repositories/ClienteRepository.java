package io.github.andreleao.clientes.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import io.github.andreleao.clientes.models.Cliente;
import io.github.andreleao.clientes.models.Usuario;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Integer> {

	
}
