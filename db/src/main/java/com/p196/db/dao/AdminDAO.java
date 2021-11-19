package com.p196.db.dao;

import com.p196.db.model.User;
import com.p196.db.model.Admin;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class AdminDAO extends UserDAO implements DAO<User> {
	private static final Logger log = LoggerFactory.getLogger(VetDAO.class);

	RowMapper<User> rowMapper = (rs, rowNum) -> {
		Admin user = new Admin();
//        user.setUserID(rs.getInt("UserID"));
		return user;
	};

	public AdminDAO(JdbcTemplate jdbcTemplate) {
		super(jdbcTemplate);
		// TODO Auto-generated constructor stub
	}

	@Override
	public List<User> list() {
		String sql = "SELECT USERS.UserID, " +
					 "Username, " + 
					 "Password, " + 
					 "Email, " + 
					 "Fname, " + 
					 "Lname, "+ 
					 "OtherStuffs, " + 
					 "Type, " + 
					 "numStudents " + 
					 "FROM USERS " + 
					 "JOIN Admin A "+ 
					 "ON USERS.UserID = A.UserID";

		return jdbcTemplate.query(sql, rowMapper);
	}

	@Override
	public void create(User User) {
		String sql =
                "INSERT " +
                        "INTO USER(" +
                        "Username, " +
                        "Password, " +
                        "Email, " +
                        "Fname, " +
                        "Lname) " +
                        "VALUES(" +  
                        User.getUsername() + "," +
                        User.getPassword() + "," +
                        User.getEmail() + "," +
                        User.getFirstName() + "," +
                        User.getLastName() + ")";
		
        int insert = jdbcTemplate.update(sql);
        
        if(insert == 1){
            log.info("New User created: " + User.getFirstName());
        } else {
            log.info("Mistake");
        }
    }


	@Override
	public Optional<User> get(int id) {
		String sql = "SELECT " + "USERS.UserID, " + "Username, " + "Password, " + "Email, " + "Fname, " + "Lname, "
				+ "OtherStuffs, " + "Type, " + "numStudents " + "FROM USERS " + "JOIN Admin A "
				+ "ON USERS.UserID = A.UserID " + "WHERE USERS.UserID = " + id;

		User admin = null;

		try {
			List<User> admins = jdbcTemplate.query(sql, rowMapper, id);
			admin = admins.get(0);
		} catch (IndexOutOfBoundsException ex) {
			log.info(id + " not found");
		}
		return Optional.ofNullable(admin);
	}

	@Override
	public void delete(int id) {
        String sql =
                "DELETE FROM USER " +
                        "WHERE UserID = ?";
        jdbcTemplate.update(sql, id);
	}

	@Override
	public void update(User userRegistration, int id) {
		 String sql =
	                "UPDATE USERS " +
	                        "SET " +
	                        "Username = ?, " +
	                        "Password = ?," +
	                        "Email = ?, " +
	                        "Fname = ?, "  +
	                        "Lname = ?, "  +
	                        "WHERE UserID = ?";
	        int update = jdbcTemplate.update(
	                sql,
	                userRegistration.getUsername(),
	                userRegistration.getPassword(),
	                userRegistration.getEmail(),
	                userRegistration.getFirstName(),
	                userRegistration.getLastName(),
	                id);
	        if(update == 1){
	            log.info("User with id " + userRegistration.getUserId() + " updated");
	        }

	}

}
