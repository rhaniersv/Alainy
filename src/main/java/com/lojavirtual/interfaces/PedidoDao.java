package com.lojavirtual.interfaces;

import com.lojavirtual.models.Pedido;
import org.springframework.data.repository.CrudRepository;

public interface PedidoDao extends CrudRepository<Pedido, Integer> {

}
