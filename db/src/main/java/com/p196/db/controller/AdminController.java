package com.p196.db.controller;

import com.p196.db.dao.AdminDAO;
import com.p196.db.dao.UserDAO;
import com.p196.db.model.Admin;
import com.p196.db.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "/admin")
public class AdminController {
	private final AdminDAO dao;
	private final UserDAO userDao;
	
	@Autowired
	public AdminController(AdminDAO dao, @Qualifier("userDAO") UserDAO userDao) {
		this.dao = dao;
		this.userDao = userDao;
	}

//	@GetMapping()
//	public Optional<Admin> getAdmin(@RequestParam(required = false, name = "UserID") Integer UserID) {
//		return dao.get(UserID);
//	}

	@PostMapping()
	public String addUser(@ModelAttribute User user) {
//		dao.create(user);
		return "Successfully added";
	}

	@DeleteMapping()
	public String deleteUser(@RequestParam(required = false, name = "UserID") Integer UserID) {
//		dao.delete(UserID);
		return "Deleted successfully";
	}

	@PutMapping()
	public String updateUser(@ModelAttribute User user,
			@RequestParam(required = false, name = "UserID") Integer UserID) {
//		dao.update(user, UserID);
		return "Updated successfully";

	}
}
