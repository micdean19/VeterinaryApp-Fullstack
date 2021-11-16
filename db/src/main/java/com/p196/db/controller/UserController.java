package com.p196.db.controller;
import com.p196.db.dao.UserDAO;
import com.p196.db.dao.VetDAO;
import com.p196.db.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "/user-registration")
public class UserController {
    private UserDAO dao;

    @Autowired
    public UserController(@Qualifier("userDAO") UserDAO dao) {
        this.dao = dao;
    }

    @GetMapping()
    public Optional<User> getUser(
            @RequestParam(required = false, name="UserID") Integer userId,
            @RequestParam(required = false, name="UserKey") String userKey){
        setDao(userKey);
        return dao.get(userId);
    }

    @PostMapping()
    public void registerUser(@ModelAttribute User user,
                             @RequestParam(required = false, name="UserKey") String userKey)
    {
        setDao(userKey);
        dao.create(user);
    }

    @DeleteMapping()
    public String deleteAnimal(@RequestParam(required = false, name="UserID") Integer userId,
                               @RequestParam(required = false, name="UserKey") String userKey) {
        setDao(userKey);
        dao.delete(userId);
        return "Deleted successfully";
    }

    @PutMapping()
    public void updateAnimal(@ModelAttribute User user,
                             @RequestParam(required = false, name="UserID") Integer userId,
                             @RequestParam(required = false, name="UserKey") String userKey){
        setDao(userKey);
        dao.update(user, userId);
    }

    public void setDao(String userKey) {
        // default case
        if (userKey == null) {
            this.dao = new UserDAO(dao.getJdbcTemplate());
            return;
        }

        switch (userKey) {
            case "healthcare":
                this.dao = new VetDAO(dao.getJdbcTemplate());
                break;
            case "student":
//                this.dao = new UserDAO();
                break;
            default:
                this.dao = new UserDAO(dao.getJdbcTemplate());
        }
    }

}
