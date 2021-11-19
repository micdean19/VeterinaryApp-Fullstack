package com.p196.db.dao;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import com.p196.db.model.User;

@Component
public class UserDAO implements DAO<User> {

    private final Logger log = LoggerFactory.getLogger(UserDAO.class);
    protected JdbcTemplate jdbcTemplate;

    RowMapper<User> rowMapper = (rs, rowNum) -> {
        User user = new User();
        user.setUserId(rs.getInt("UserID"));
        user.setUsername(rs.getString("Username"));
        user.setPassword(rs.getString("Password"));
        user.setFirstName(rs.getString("Fname"));
        user.setLastName(rs.getString("Lname"));
        user.setEmail(rs.getString("Email"));
        return user;
    };

    public UserDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<User> list() {
        String sql =
                "SELECT USERS.UserID, Username, Password, Email, Fname, Lname, OtherStuffs FROM USERS";
        return jdbcTemplate.query(sql,rowMapper);
    }

    @Override
    public void create(User user) {
        String sql =
                "INSERT " +
                        "INTO USERS(" +
                        "Username, " +
                        "Password, " +
                        "Email, " +
                        "Fname, " +
                        "Lname, " +
                        "OtherStuffs) " +
                        "VALUES(?,?,?,?,?,?)";
        int insert = jdbcTemplate.update(
                sql,
                user.getUsername(),
                user.getPassword(),
                user.getEmail(),
                user.getFirstName(),
                user.getLastName(),
                user.getOther()
        );
        if(insert == 1){
            log.info("New user created: " + user.getUsername());
        } else {
            log.info("Mistake");
        }

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
                        "OtherStuffs " +
                        "FROM USERS " +
                        "WHERE USERS.UserID = ?";

        User user = null;

        try{
            List<User> users = jdbcTemplate.query(sql, rowMapper, id);
            user = users.get(0);
        } catch (IndexOutOfBoundsException ex) {
            log.info(id + " not found");
        }
        return Optional.ofNullable(user);
    }

    @Override
    public void update(User userRegistration, int id) {

    }

    @Override
    public void delete(int id) {

    }

    // passing connection parameters
    public JdbcTemplate getJdbcTemplate() {
        return jdbcTemplate;
    }
}


