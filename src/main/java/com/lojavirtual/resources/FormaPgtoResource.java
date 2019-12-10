package com.lojavirtual.resources;

import com.lojavirtual.interfaces.FormaPgtoDao;
import com.lojavirtual.models.FormaPgto;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/forma-pgto")
public class FormaPgtoResource {

    @Autowired
    private FormaPgtoDao Dao;

    @PostMapping
    public void create(@RequestBody FormaPgto formaPgto) {
        Dao.save(formaPgto);
    }

    @GetMapping(value = "/{id}")
    public FormaPgto read(@PathVariable Integer id) {
        FormaPgto formaPgto;

        formaPgto = Dao.findById(id).get();
        return formaPgto;
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<FormaPgto> update(@PathVariable Integer id, @RequestBody FormaPgto formaPgto) {
        Optional<FormaPgto> formaPgtoBanco = Dao.findById(id);
        BeanUtils.copyProperties(formaPgto, formaPgtoBanco.get(), "id");
        Dao.save(formaPgtoBanco.get());
        return ResponseEntity.ok(formaPgto);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable Integer id) {
        Dao.deleteById(id);
    }

    @GetMapping
    public List<FormaPgto> list() {
        List<FormaPgto> list = new ArrayList<>();
        Dao.findAll().forEach(p -> {
            list.add(p);
        });
        return list;
    }

}
