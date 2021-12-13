package com.p196.db.controller;
import com.p196.db.dao.UserDAO;
import com.p196.db.dao.VetDAO;
import com.p196.db.model.Animal;
import com.p196.db.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/user-management")
public class UserController {
    private UserDAO dao;

    @Autowired
    public UserController(@Qualifier("userDAO") UserDAO dao) {
        this.dao = dao;
    }

    @GetMapping(path="/all")
    public List<User> getUserList() {
        return dao.list();
    }

    @GetMapping()
    public Optional<User> getUser(
            @RequestParam(required = false, name="UserID") Integer userId,
            @RequestParam(required = false, name="UserKey") String userKey){
        setDao(userKey);
        return dao.get(userId);
    }

    @GetMapping(path="/searchName")
    public List<User> getUserByName(
            @RequestParam(required = false, name="firstName") String firstName,
            @RequestParam(required = false, name="lastName") String lastName){
        if (firstName == null && lastName == null) {
            return null;
        }
        System.out.println(lastName);
        return dao.getByName(firstName, lastName);

    }

    @CrossOrigin
    @PostMapping()
    public String registerUser(@ModelAttribute User user,
                             @RequestParam(required = false, name="UserKey") String userKey)
    {
        setDao(userKey);
        dao.create(user);
        return user.toString();
    }



    @DeleteMapping()
    public String deleteUser(@RequestParam(required = false, name="UserID") Integer userId,
                               @RequestParam(required = false, name="UserKey") String userKey) {
        setDao(userKey);
        dao.delete(userId);
        return "Deleted successfully";
    }

    @CrossOrigin
    @PutMapping()
    public String updateUser(@ModelAttribute User user,
                             @RequestParam(required = false, name="UserID") Integer userId,
                             @RequestParam(required = false, name="UserKey") String userKey){
        setDao(userKey);
        dao.update(user, userId);
        return "Updated successfully";
    }

    public void setDao(String userKey) {
        // default case
        if (userKey == null) {
            this.dao = new UserDAO(dao.getJdbcTemplate());
            return;
        }

        // TODO make this a factory
        switch (userKey) {
            case "healthcare":
                this.dao = new VetDAO(dao.getJdbcTemplate());
                break;
            case "student":
                break;
            default:
                this.dao = new UserDAO(dao.getJdbcTemplate());
        }
    }

}
