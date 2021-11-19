package com.p196.db.dao;
import com.p196.db.model.User;
import com.p196.db.model.Vet;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class VetDAO extends UserDAO implements DAO<User> {
    private static final Logger log = LoggerFactory.getLogger(VetDAO.class);

    RowMapper<User> rowMapper = (rs, rowNum) -> {
        Vet user = new Vet();
        user.setUserId(rs.getInt("UserID"));
        user.setUsername(rs.getString("Username"));
        user.setPassword(rs.getString("Password"));
        user.setFirstName(rs.getString("Fname"));
        user.setLastName(rs.getString("Lname"));
        user.setEmail(rs.getString("Email"));
        user.setType(rs.getString("Type"));
        user.setNumStudents(rs.getInt("numStudents"));
        return user;
    };

    public VetDAO(JdbcTemplate jdbcTemplate) {
        super(jdbcTemplate);
    }


    @Override
    public List<User> list() {
        String sql =
                "SELECT USERS.UserID, " +
                        "Username, " +
                        "Password, " +
                        "Email, " +
                        "Fname, " +
                        "Lname, " +
                        "OtherStuffs, " +
                        "Type, " +
                        "numStudents " +
                        "FROM USERS " +
                        "JOIN HealthPeople HP " +
                        "ON USERS.UserID = HP.UserID";

        return jdbcTemplate.query(sql,rowMapper);
    }

    @Override
    public void create(User User) {

    }

    @Override
    public Optional<User> get(int id) {
        String sql =
                "SELECT " +
                        "USERS.UserID, " +
                        "Username, " +
                        "Password, " +
                        "Email, " +
                        "Fname, " +
                        "Lname, " +
                        "OtherStuffs, " +
                        "Type, " +
                        "numStudents " +
                        "FROM USERS " +
                        "JOIN HealthPeople HP " +
                        "ON USERS.UserID = HP.UserID " +
                        "WHERE USERS.UserID = ?";

        User vet = null;

        try{
            List<User> vets = jdbcTemplate.query(sql, rowMapper, id);
            vet = vets.get(0);
        } catch (IndexOutOfBoundsException ex) {
            log.info(id + " not found");
        }
        return Optional.ofNullable(vet);
    }

    @Override
    public void update(User userRegistration, int id) {

    }

    @Override
    public void delete(int id) {

    }
}
