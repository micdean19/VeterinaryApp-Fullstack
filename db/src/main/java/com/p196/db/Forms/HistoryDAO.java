package com.p196.db.Forms;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.util.List;


@Component
public class HistoryDAO {

    private static final Logger log = LoggerFactory.getLogger(RoleDAO.class);
    private final JdbcTemplate jdbcTemplate;

    public HistoryDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    RowMapper<RecordHistory> rowMapper = (rs, rowNum) -> {
        RecordHistory history = new RecordHistory();
        history.setUsername(rs.getString("username"));
        history.setAnimalId(rs.getInt("AnimalID"));
        history.setTimestamp(rs.getString("Timestamp"));
        history.setComment(rs.getString("Comment"));
        history.setMeasurement(rs.getString("Measurement"));
        history.setUserFirstName(rs.getString("Fname"));
        history.setUserLastName(rs.getString("Lname"));
        return history;
    };

    public List<RecordHistory> getHistory(Integer animalId) {
        String sql =
                "SELECT username, Fname, Lname, AnimalID, Measurement, Comment, Timestamp FROM\n" +
                        "RECORDHISTORY R JOIN USERS U on R.UserID = U.UserID\n" +
                        "WHERE AnimalID = ?\n" +
                        "ORDER BY Timestamp DESC";
        return jdbcTemplate.query(sql, rowMapper, animalId);
    }

}
