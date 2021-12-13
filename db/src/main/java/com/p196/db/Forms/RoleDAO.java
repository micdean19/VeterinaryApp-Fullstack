package com.p196.db.Forms;

import com.p196.db.dao.DAO;
import com.p196.db.model.Animal;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class RoleDAO implements FormDAO<Role>{

    private static final Logger log = LoggerFactory.getLogger(RoleDAO.class);
    private final JdbcTemplate jdbcTemplate;

    public RoleDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    RowMapper<Role> rowMapper = (rs, rowNum) -> {
        Role role = new Role();
        role.setRole(rs.getString("RoleName"));
        return role;
    };

    @Override
    public List<Role> list() {
        String sql =
                "SELECT RoleName FROM ROLE_TYPE";
        return jdbcTemplate.query(sql, rowMapper);
    }

    @Override
    public void update(Integer userId, String role) {
        String sql = "UPDATE USER SET AccessLevel = ? WHERE UserID = ?";
        jdbcTemplate.update(sql, role.toUpperCase(), userId);
    }



}
