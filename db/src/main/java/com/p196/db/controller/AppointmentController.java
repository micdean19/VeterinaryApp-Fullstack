package com.p196.db.controller;

import com.p196.db.dao.AppointmentDAO;
import com.p196.db.model.Admin;
import com.p196.db.model.Appointments;
import com.p196.db.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "/appointments")
public class AppointmentController {
	private final AppointmentDAO dao;

	@Autowired
	public AppointmentController(AppointmentDAO dao) {
		this.dao = dao;
	}

	@GetMapping()
	// Not sure how to specifcy 2 requirements, we need to use userid + animalid to
	// get the appointment we want
	public Optional<Appointments> getUser(@RequestParam(required = false, name = "UserID") Integer UserID) {
		return dao.get(UserID);
	}

	@PostMapping()
	public void addAppointment(@ModelAttribute Appointments appointment) {
		dao.create(appointment);
	}

	@DeleteMapping()
	// same issue here.
	public String deleteAppointment(@RequestParam(required = false, name = "UserID") Integer UserID) {
		dao.delete(UserID);
		return "Deleted successfully";
	}

	@PutMapping()
	public void updateAppointment(@ModelAttribute Appointments appointment,
			@RequestParam(required = false, name = "Datetime") String DateTime) {
		dao.update(appointment);

	}
}
