package com.lojavirtual.interfaces;

import com.lojavirtual.models.Pessoa;
import org.springframework.data.repository.CrudRepository;

public interface PessoaDao extends CrudRepository<Pessoa, Integer> {

}
