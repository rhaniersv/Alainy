package com.lojavirtual.interfaces;

import org.springframework.data.repository.CrudRepository;

import com.lojavirtual.models.Produto;

public interface ProdutoDao extends CrudRepository<Produto, Integer> {

}
