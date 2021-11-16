package com.p196.db.controller;

import com.p196.db.dao.AnimalDAO;
import com.p196.db.model.Animal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "/animal-registration")
public class AnimalController {
    private final AnimalDAO dao;

    @Autowired
    public AnimalController(AnimalDAO dao) {
        this.dao = dao;
    }

    @GetMapping()
    public Optional<Animal> getAnimal(@RequestParam(required = false, name="AnimalID") Integer animalId) {
        return dao.get(animalId);
    }

    @PostMapping()
    public void registerAnimal(@ModelAttribute Animal animal) {
        dao.create(animal);
    }

    @DeleteMapping()
    public String deleteAnimal(@RequestParam(required = false, name="AnimalID") Integer animalId) {
        dao.delete(animalId);
        return "Deleted successfully";
    }

    @PutMapping()
    public void updateAnimal(@ModelAttribute Animal animal,
                             @RequestParam(required = false, name="AnimalID") Integer animalId){
        dao.update(animal, animalId);

    }

}
