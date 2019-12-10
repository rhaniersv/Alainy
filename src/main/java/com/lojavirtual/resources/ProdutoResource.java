package com.lojavirtual.resources;

import com.lojavirtual.interfaces.ProdutoDao;
import com.lojavirtual.models.Produto;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/produto")
public class ProdutoResource {

    @Autowired
    private ProdutoDao Dao;

    @PostMapping
    public void create(@RequestBody Produto obj) {
        Dao.save(obj);
    }

    @GetMapping(value = "/{id}")
    public Produto read(@PathVariable Integer id) {
        Produto obj;

        obj = Dao.findById(id).get();
        return obj;
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Produto> update(@PathVariable Integer id, @RequestBody Produto obj) {
        Optional<Produto> objBanco = Dao.findById(id);
        BeanUtils.copyProperties(obj, objBanco.get(), "id");
        Dao.save(objBanco.get());
        return ResponseEntity.ok(obj);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable Integer id) {
        Dao.deleteById(id);
    }

    @GetMapping
    public List<Produto> list() {
        List<Produto> list = new ArrayList<>();
        Dao.findAll().forEach(p -> {
            list.add(p);
        });
        return list;
    }

}
