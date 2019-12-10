package com.lojavirtual.resources;

import com.lojavirtual.interfaces.PessoaDao;
import com.lojavirtual.models.Pessoa;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/pessoa")
public class PessoaResource {

    @Autowired
    private PessoaDao Dao;

    @PostMapping
    public void create(@RequestBody Pessoa pessoa) {
        Dao.save(pessoa);
    }

    @GetMapping(value = "/{id}")
    public Pessoa read(@PathVariable Integer id) {
        Pessoa pessoa;

        pessoa = Dao.findById(id).get();
        return pessoa;
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Pessoa> update(@PathVariable Integer id, @RequestBody Pessoa pessoa) {
        Optional<Pessoa> pessoaBanco = Dao.findById(id);
        BeanUtils.copyProperties(pessoa, pessoaBanco.get(), "id");
        Dao.save(pessoaBanco.get());
        return ResponseEntity.ok(pessoa);
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable Integer id) {
        Dao.deleteById(id);
    }

    @GetMapping
    public List<Pessoa> list() {
        List<Pessoa> list = new ArrayList<>();
        Dao.findAll().forEach(p -> {
            list.add(p);
        });
        return list;
    }

}
