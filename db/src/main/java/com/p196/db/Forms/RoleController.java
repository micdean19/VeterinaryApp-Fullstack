package com.p196.db.Forms;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/get-roles")
public class RoleController {
    private RoleDAO dao;

    @Autowired
    public RoleController(RoleDAO dao) {
        this.dao = dao;
    }

    @GetMapping()
    public List<Role> getUserList() {
        return dao.list();
    }

}
