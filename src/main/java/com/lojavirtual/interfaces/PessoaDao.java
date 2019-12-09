package com.lojavirtual.interfaces;

import org.springframework.data.repository.CrudRepository;

import com.lojavirtual.models.Pessoa;

public interface PessoaDao extends CrudRepository<Pessoa, Integer> {

}
