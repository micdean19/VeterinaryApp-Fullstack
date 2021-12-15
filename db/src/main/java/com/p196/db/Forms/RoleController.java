package com.p196.db.Forms;

import com.p196.db.model.Animal;
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

    @CrossOrigin
    @PutMapping()
    public void update(@ModelAttribute Role role,
                       @RequestParam(required = false, name = "userID") Integer userid) {
        dao.update(userid, role.getRole());
        return;
    }

}
