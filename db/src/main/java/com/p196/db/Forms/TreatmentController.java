package com.p196.db.Forms;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/treatment")
public class TreatmentController {
    private TreatmentDAO dao;

    @Autowired
    public TreatmentController(TreatmentDAO dao) {
        this.dao = dao;
    }

    @CrossOrigin
    @PostMapping()
    public String update(@ModelAttribute Treatment treatment) {
        return dao.insert(treatment);
    }

}
