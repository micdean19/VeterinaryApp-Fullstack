package com.p196.db.dao;
import com.p196.db.model.Appointments;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

// Note because we no longer use appointment, this class won't be populated.
// Based on the mock data provided by Dr Marasco, this class isn't necessary.
@Component
public class AppointmentDAO implements DAO<Appointments>{

	@Override
	public List<Appointments> list() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void create(Appointments t) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Optional<Appointments> get(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	public void update(Appointments t) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void update(Appointments t, int id) {
		// TODO Auto-generated method stub
		
	}


	

}
