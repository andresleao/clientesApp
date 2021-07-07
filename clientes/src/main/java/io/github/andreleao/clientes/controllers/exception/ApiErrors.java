package io.github.andreleao.clientes.controllers.exception;

import java.util.List;
import java.util.Arrays;
import lombok.Getter;

public class ApiErrors {

	@Getter
	private List<String> errors;

	public ApiErrors(List<String> errors) {
		this.errors = errors;
	}
	
	public ApiErrors(String message) {
		this.errors = Arrays.asList(message);
	}
	
	
}
