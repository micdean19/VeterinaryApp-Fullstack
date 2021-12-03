package com.p196.db.controller;

import com.p196.db.dao.AnimalDAO;
import com.p196.db.model.Animal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/animal-management")
public class AnimalController {
    private final AnimalDAO dao;

    @Autowired
    public AnimalController(AnimalDAO dao) {
        this.dao = dao;
    }

    @GetMapping(path="/all")
    public List<Animal> getAnimalList() {
        return dao.list();
    }
    // For Specific animal (provide animal ID)
    @GetMapping()
    public Optional<Animal> getAnimal(@RequestParam(required = false, name="AnimalID") Integer animalId) {
        return dao.get(animalId);
    }

    @PostMapping()
    public String registerAnimal(@ModelAttribute Animal animal) {
        dao.create(animal);
        return animal.toString();
    }

    @DeleteMapping()
    public String deleteAnimal(@RequestParam(required = false, name="AnimalID") Integer animalId) {
        // will throw FK constraint violation
//        dao.delete(animalId);
        return "Deleted successfully";
    }

    @PutMapping()
    public String updateAnimal(@ModelAttribute Animal animal,
                             @RequestParam(required = false, name="AnimalID") Integer animalId){
        dao.update(animal, animalId);
        return "Updated successfully";
    }

}
