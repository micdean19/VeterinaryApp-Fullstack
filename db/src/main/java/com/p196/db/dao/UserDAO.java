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
        user.setAccessLevel(rs.getString("AccessLevel"));
        return user;
    };

    public UserDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<User> list() {
        String sql =
                "SELECT UserID, Username, Password, Email, Fname, Lname, OtherStuffs, AccessLevel FROM USERS";
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
                        "OtherStuffs, " +
                        "AccessLevel) " +
                        "VALUES(?,?,?,?,?,?,?)";
        int insert = jdbcTemplate.update(
                sql,
                user.getUsername(),
                user.getPassword(),
                user.getEmail(),
                user.getFirstName(),
                user.getLastName(),
                user.getOther(),
                user.getAccessLevel()
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
                        "UserID, " +
                        "Username, " +
                        "Password, " +
                        "Email, " +
                        "Fname, " +
                        "Lname, " +
                        "OtherStuffs, " +
                        "AccessLevel " +
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
    public void update(User user, int userId) {
        System.out.println(user);
        String sql =
                "UPDATE USERS " +
                        "SET " +
                        "Username = ?, " +
                        "Password = ?, " +
                        "Email = ?, " +
                        "Fname = ?, " +
                        "Lname = ?, " +
                        "OtherStuffs = ?, " +
                        "AccessLevel = ? " +
                        "WHERE UserID = ?";

        int update = jdbcTemplate.update(
                sql,
                user.getUsername(),
                user.getPassword(),
                user.getEmail(),
                user.getFirstName(),
                user.getLastName(),
                user.getOther(),
                user.getAccessLevel(),
                userId);
        if(update == 1){
            log.info("User with username " + userId + " updated");
        }
    }


    @Override
    public void delete(int id) {

    }

    public Optional<User> verifyUser(String username, String password) {
        String sql =
                "SELECT " +
                        "UserID, " +
                        "Username, " +
                        "Password, " +
                        "Email, " +
                        "Fname, " +
                        "Lname, " +
                        "OtherStuffs, " +
                        "AccessLevel " +
                        "FROM USERS " +
                        "WHERE Email = ?"
                        + "AND Password = ?";

        User user = null;

        try{
            List<User> users = jdbcTemplate.query(sql, rowMapper, username, password);
            user = users.get(0);
        } catch (IndexOutOfBoundsException ex) {
            log.info(username + " not found");
        }
        return Optional.ofNullable(user);
    }

    public List<User> getByName(String firstName, String lastName) {
        if (firstName == null)
            firstName = "";
        firstName = "%" + firstName + "%";
        if (lastName == null)
            lastName = "";
        lastName = "%" + lastName + "%";

        String sql =
                "SELECT " +
                        "UserID, " +
                        "Username, " +
                        "Password, " +
                        "Email, " +
                        "Fname, " +
                        "Lname, " +
                        "OtherStuffs, " +
                        "AccessLevel " +
                        "FROM USERS " +
                        "WHERE Fname LIKE ?"
                        + "AND Lname LIKE ?";

        User user = null;

        try{
            List<User> users = jdbcTemplate.query(sql, rowMapper, firstName, lastName);
            return users;
        } catch (IndexOutOfBoundsException ex) {
            log.info(firstName + " " + lastName+ " not found");
            return null;
        }
    }

    // passing connection parameters
    public JdbcTemplate getJdbcTemplate() {
        return jdbcTemplate;
    }
}


