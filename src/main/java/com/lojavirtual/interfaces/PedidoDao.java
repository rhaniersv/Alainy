package com.lojavirtual.interfaces;

import org.springframework.data.repository.CrudRepository;

import com.lojavirtual.models.Pedido;

public interface PedidoDao extends CrudRepository<Pedido, Integer> {

}
