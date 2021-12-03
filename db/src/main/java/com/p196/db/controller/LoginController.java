package com.p196.db.controller;
import com.nimbusds.jose.shaded.json.JSONObject;
import com.p196.db.dao.UserDAO;
import com.p196.db.model.LoginForm;
import com.p196.db.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicReference;

@RestController
@RequestMapping(path = "/login-management")
public class LoginController {
    private UserDAO dao;

    @Autowired
    public LoginController(@Qualifier("userDAO") UserDAO dao) {
        this.dao = dao;
    }


    // TODO fix this
    @PostMapping()
    public JSONObject verifyUser(@ModelAttribute LoginForm form) {
        JSONObject userJson = new JSONObject();

        System.out.println(form.getEmail());
        System.out.println(form.getPassword());
        String email = form.getEmail();
        String password = form.getPassword();

        if(!Objects.equals(email, "") && !Objects.equals(password, "")) {
            Optional<User> verifedUser = dao.verifyUser(email, password);
            verifedUser.ifPresent(user -> {
                userJson.put("user", user.toJson());
                userJson.put("success", true);
            });
        } else {
            userJson.put("success", false);
        }
        return userJson;
    }

}
