package com.lojavirtual.resources;

import com.lojavirtual.interfaces.GrupoProdutoDao;
import com.lojavirtual.models.GrupoProduto;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/grupo-produto")
public class GrupoProdutoResource {

    @Autowired
    private GrupoProdutoDao Dao;

    @PostMapping
    public void create(@RequestBody GrupoProduto obj) {
        Dao.save(obj);
    }

    @GetMapping(value = "/{id}")
    public GrupoProduto read(@PathVariable Integer id) {
        GrupoProduto obj;

        obj = Dao.findById(id).get();
        return obj;
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<GrupoProduto> update(@PathVariable Integer id, @RequestBody GrupoProduto obj) {
        Optional<GrupoProduto> objBanco = Dao.findById(id);
        BeanUtils.copyProperties(obj, objBanco.get(), "id");
        Dao.save(objBanco.get());
        return ResponseEntity.ok(obj);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable Integer id) {
        Dao.deleteById(id);
    }

    @GetMapping
    public List<GrupoProduto> list() {
        List<GrupoProduto> list = new ArrayList<>();
        Dao.findAll().forEach(p -> {
            list.add(p);
        });
        return list;
    }

}
