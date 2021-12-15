package com.p196.db.Forms;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class PrescriptionDAO {

    private static final Logger log = LoggerFactory.getLogger(PrescriptionDAO.class);
    private final JdbcTemplate jdbcTemplate;

    public PrescriptionDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public String insert(Prescription prescription) {
        // insert into treatment if exists
        try{
            String sql = "INSERT INTO Prescription (AnimalID, UserID, DrugID, Instructions, Dosage) VALUES (?, ?, ?, ?, ?)";
            jdbcTemplate.update(sql, prescription.getAnimalId(), prescription.getUserId(), prescription.getDrugId(), prescription.getInstructions(), prescription.getDosage());
            log.info("Success inserting treatment");
        } catch (Exception e) {
            log.error("Error inserting treatment: " + e.getMessage());
            return null;
        }
        return "Success inserting prescription";
    }

}
