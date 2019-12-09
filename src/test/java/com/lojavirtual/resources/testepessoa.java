package com.lojavirtual.resources;

import static org.junit.Assert.*;

import org.junit.Test;

import com.lojavirtual.models.Pessoa;

public class testepessoa {

	@Test
	public void testRead() {
		int id = 1;
		PessoaResource resource = new PessoaResource();
		Pessoa pessoa = new Pessoa();
		pessoa = resource.read(id);
		assertNotNull(pessoa);
		
		/**
		{
		"pessoa": [
		       	{
		       		"id" : 1,
		       		"bairro" : "rodolfo",
		       		"cep" : 0,
		       		"cidade" : "",
		       		"cpf" : "",
		       		"data_nasc" : "2019-10-02T03:00:00Z",
		       		"email" : "",
		       		"fone1" : "",
		       		"fone2" : "",
		       		"nome" : "",
		       		"rg" : "",
		       		"rua" : "",
		       		"senha" : "",
		       		"tipo" : "",
		       		"uf" : ""
		       	}
		       ]}
		**/

	}

	@Test
	public void testUpdate() {
		fail("Not yet implemented");
	}

}
