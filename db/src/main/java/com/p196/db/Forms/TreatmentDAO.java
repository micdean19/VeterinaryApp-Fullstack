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
public class TreatmentDAO {

    private static final Logger log = LoggerFactory.getLogger(RoleDAO.class);
    private final JdbcTemplate jdbcTemplate;

    public TreatmentDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public String insert(Treatment treatment) {
        // insert into treatment if exists
        try{
            String sql = "INSERT INTO Treatment (AnimalID, UserID, TreatmentStage, Description) VALUES (?, ?, ?, ?)";
            jdbcTemplate.update(sql, treatment.getUserId(), treatment.getAnimalId(), treatment.getTreatmentStage(), treatment.getDescription());
            log.info("Success inserting treatment");
        } catch (Exception e) {
            log.error("Error inserting treatment: " + e.getMessage());
            return null;
        }

        try{
            // insert into diagnosis if illness is not empty
            if(!treatment.getIllness().equals("") || treatment.getIllness() != null) {
                String sql = "INSERT INTO Diagnosis (AnimalID, UserID, Illness) VALUES (?, ?, ?)";
                jdbcTemplate.update(sql, treatment.getAnimalId(), treatment.getUserId(), treatment.getIllness());
                log.info("Success inserting diagnosis");
                return "Success";
            }
        } catch (Exception e) {
            log.error("Error inserting diagnosis: " + e.getMessage());
        }   return null;
    }

}
