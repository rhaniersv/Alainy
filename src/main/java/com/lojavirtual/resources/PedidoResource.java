package com.lojavirtual.resources;

import com.lojavirtual.interfaces.PedidoDao;
import com.lojavirtual.models.Pedido;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/pedido")
public class PedidoResource {

    @Autowired
    private PedidoDao Dao;

    @PostMapping
    public void create(@RequestBody Pedido obj) {
        Dao.save(obj);
    }

    @GetMapping(value = "/{id}")
    public Pedido read(@PathVariable Integer id) {
        Pedido obj;

        obj = Dao.findById(id).get();
        return obj;
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Pedido> update(@PathVariable Integer id, @RequestBody Pedido obj) {
        Optional<Pedido> objBanco = Dao.findById(id);
        BeanUtils.copyProperties(obj, objBanco.get(), "id");
        Dao.save(objBanco.get());
        return ResponseEntity.ok(obj);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable Integer id) {
        Dao.deleteById(id);
    }

    @GetMapping
    public List<Pedido> list() {
        List<Pedido> list = new ArrayList<>();
        Dao.findAll().forEach(p -> {
            list.add(p);
        });
        return list;
    }

}
