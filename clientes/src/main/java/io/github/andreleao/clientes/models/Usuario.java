package io.github.andreleao.clientes.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(unique = true, name = "login")
	@NotEmpty(message = "O campo Login é obrigatório!")
	private String username;
	
	@NotEmpty(message = "O campo Senha é obrigatório!")
	@Column(name = "senha")
	private String password;
}
