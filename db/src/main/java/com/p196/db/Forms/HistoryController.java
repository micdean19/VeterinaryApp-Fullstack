package com.p196.db.Forms;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
}
