package com.lojavirtual.interfaces;

import com.lojavirtual.models.Produto;
import org.springframework.data.repository.CrudRepository;

public interface ProdutoDao extends CrudRepository<Produto, Integer> {

}
