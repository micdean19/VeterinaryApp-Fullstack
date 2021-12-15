package com.p196.db.Forms;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/records")
public class HistoryController {
    private HistoryDAO dao;

    @Autowired
    public HistoryController(HistoryDAO dao) {
        this.dao = dao;
    }

    @GetMapping
    public List<RecordHistory> getAnimalHistory(@RequestParam(required = false, name = "AnimalID") Integer animalId
    ) {
        return dao.getHistory(animalId);
    }

    @CrossOrigin
    @PostMapping()
    public String registerUser(@ModelAttribute RecordHistory history)
    {
        dao.create(history);
        return history.toString();
    }

    @CrossOrigin
    @DeleteMapping()
    public String updateUser(@ModelAttribute RecordHistory history)
    {
        dao.delete(history);
        return history.toString();
    }

}
