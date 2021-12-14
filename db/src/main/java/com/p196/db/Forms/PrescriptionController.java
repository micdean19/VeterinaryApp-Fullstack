package com.p196.db.Forms;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/prescribe")
public class PrescriptionController {
    private PrescriptionDAO dao;

    @Autowired
    public PrescriptionController(PrescriptionDAO dao) {
        this.dao = dao;
    }

    @CrossOrigin
    @PostMapping()
    public String update(@ModelAttribute Prescription prescription) {
        return dao.insert(prescription);
    }

}
