package com.p196.db.dao;

import com.p196.db.model.Animal;
import com.p196.db.model.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class AnimalDAO implements DAO<Animal>{

    private static final Logger log = LoggerFactory.getLogger(AnimalDAO.class);
    private final JdbcTemplate jdbcTemplate;

    public AnimalDAO(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
    // Map has to match model. 
    RowMapper<Animal> rowMapper = (rs, rowNum) -> {
        Animal animal = new Animal();
        animal.setAnimalId(rs.getInt("AnimalID"));
        animal.setName(rs.getString("Name"));
        animal.setAnimalType(rs.getString("AnimalType"));
        animal.setStatus(rs.getString("Status"));
        animal.setAdminStatus(rs.getString("AdminStatus"));
        animal.setTechnicianStatus(rs.getString("TechnicianStatus"));
        animal.setBreed(rs.getString("Breed"));
        animal.setDob(rs.getDate("Dob").toLocalDate());
        animal.setHealthStatus(rs.getString("HealthStatus"));
        animal.setImage(rs.getString("ImageLink"));
        animal.setAge();

        return animal;
    };

    @Override
    public List<Animal> list() {
        String sql =
                "SELECT a.AnimalID, a.Name, a.AnimalType, a.Status, u.Fname as 'AdminStatus', u2.Fname as 'TechnicianStatus', a.Breed, a.Dob, a.HealthStatus, a.ImageLink\r\n"
                + "FROM ANIMAL as a, USERS as u, USERS as u2\r\n"
                + "WHERE a.AdminStatus = u.UserID\r\n"
                + "AND a.TechnicianStatus = u2.UserID";
        return jdbcTemplate.query(sql,rowMapper);
    } 

    @Override
    // TO DO: Update this sql (based on added animal status + technician status)
    public void create(Animal animal) {
        String sql =
                "INSERT " +
                        "INTO ANIMAL(" +
                        "Name, " +
                        "AnimalType, " +
                        "Breed, " +
                        "Dob, " +
                        "HealthStatus) " +
                        "VALUES(?,?,?,?,?)";
        int insert = jdbcTemplate.update(
                sql,
                animal.getName(),
                animal.getAnimalType(),
                animal.getBreed(),
                animal.getDob(),
                animal.getHealthStatus());
        if(insert == 1){
            log.info("New animal created: " + animal.getName());
        } else {
            log.info("Mistake");
        }
    }

    @Override
    // TO DO: Update this sql (based on added animal status + technician status)
    public Optional<Animal> get(int id) {
        String sql =
                "SELECT " +
                        "AnimalID, " +
                        "Name, " +
                        "AnimalType, " +
                        "Status, " +
                        "AdminStatus, " +
                        "TechnicianStatus, " +
                        "Breed, " +
                        "Dob, " +
                        "HealthStatus, " +
                        "ImageLink " +
                        "FROM " +
                        "ANIMAL " +
                        "WHERE AnimalID = ?";
        Animal animal = null;
        try{
            List<Animal> animals = jdbcTemplate.query(sql, rowMapper, id);
            animal = animals.get(0);
        } catch (IndexOutOfBoundsException ex) {
            log.info("Animal with id " + id + " not found");
        }
        return Optional.ofNullable(animal);
    }

    public List<Animal> getByName(String name) {
        if (name == null)
            name = "";
        name = "%" + name + "%";

        String sql =
                "SELECT " +
                        "AnimalID, " +
                        "Name, " +
                        "AnimalType, " +
                        "Status, " +
                        "AdminStatus, " +
                        "TechnicianStatus, " +
                        "Breed, " +
                        "Dob, " +
                        "HealthStatus, " +
                        "ImageLink " +
                        "FROM ANIMAL " +
                        "WHERE Name LIKE ?";

        Animal animal = null;

        try{
            List<Animal> animals = jdbcTemplate.query(sql, rowMapper, name);
            return animals;
        } catch (IndexOutOfBoundsException ex) {
            log.info(name + " not found");
            return null;
        }
    }

    @Override
    // TO DO: Update this sql (based on added animal status + technician status)
    public void update(Animal animal, int animalID) {
        System.out.println(animal);
        String sql =
                "UPDATE ANIMAL " +
                        "SET " +
                        "AnimalType = ?, " +
                        "Name = ?, " +
                        "Breed = ?, " +
                        "Dob = ?, " +
                        "HealthStatus = ? " +
                        "WHERE AnimalID = ?";
        int update = jdbcTemplate.update(
                sql,
                animal.getAnimalType(),
                animal.getName(),
                animal.getBreed(),
                animal.getDob(),
                animal.getHealthStatus(),
                animalID);
        if(update == 1){
            log.info("Animal with id " + animal.getAnimalId() + " updated");
        }
    }

    @Override
    public void delete(int animalId) {
        String sql =
                "DELETE FROM ANIMAL " +
                        "WHERE AnimalID = ?";
        jdbcTemplate.update(sql, animalId);
    }

    public boolean updateStatus(Integer animalId, Integer userId, String role, Boolean status) {
        String statusString = "";
        try {
            // UPDATE status to "Pending"
            if (role.equals("INSTRUCTOR") && animalAvailable(animalId)) {
                if (status) {
                    statusString = "Pending";
                } else {
                    statusString = "Denied";
                }
                String sql =
                        "UPDATE ANIMAL " +
                                "SET " +
                                "Status = ? " +
                                "WHERE AnimalID = ?";
                jdbcTemplate.update(
                        sql, statusString, animalId);
                return true;
            }
            // UPDATE AdminStatus to userId
            if (role.equals("ADMIN") && checkAdminFree(animalId)) {
                if (status) {
                    statusString = "Pending";
                } else {
                    statusString = "Denied";
                }
                String sql =
                        "UPDATE ANIMAL " +
                                "SET " +
                                "Status = ?, " +
                                "AdminStatus = ? " +
                                "WHERE AnimalID = ?";
                jdbcTemplate.update(
                        sql, statusString, userId, animalId);
                return true;
            }
            // UPDATE TechnicianStatus to userId
            if (role.equals("TECHNICIAN") && checkTechFree(animalId)) {
                if (status) {
                    statusString = "Approved";
                } else {
                    statusString = "Denied";
                }
                String sql =
                        "UPDATE ANIMAL " +
                                "SET " +
                                "Status = ?, " +
                                "TechnicianStatus = ? " +
                                "WHERE AnimalID = ?";
                jdbcTemplate.update(
                        sql, statusString, userId, animalId);
                return true;
            }
        }
        catch (Exception e) {
            System.out.println(e.getCause());
            return false;
        }
        return false;
    }

    public boolean animalAvailable(Integer animalId) {
        // check if AdminStatus == 1000 and TechnicianStatus == 1000 in db if it is free we can update
        String sql =
                "SELECT IF(EXISTS(SELECT 1 FROM ANIMAL\n" +
                        "WHERE AnimalID = ?\n" +
                        "AND AdminStatus = 1000\n" +
                        "AND TechnicianStatus = 1000\n" +
                        "AND Status = 'Available'),1,0) AS result;";
        int result = jdbcTemplate.queryForObject(sql, Integer.class, animalId);

        return result == 1;

    }

    public boolean checkAdminFree(Integer animalId) {
        // check if AdminStatus == 1000 AND Status is Pending return 1 if true
        String sql =
                "SELECT IF(EXISTS(SELECT 1 FROM ANIMAL\n" +
                        "WHERE AnimalID = ?\n" +
                        "AND AdminStatus = 1000\n" +
                        "AND Status = 'Pending'),1,0) AS result;";
        int result = jdbcTemplate.queryForObject(sql, Integer.class, animalId);
        return result == 1;
    }

    public boolean checkTechFree(Integer animalId) {
        // check if AdminStatus != 1000 and TechnicianStatus == 1000 in db if it is free we can update
        String sql =
                "SELECT IF(EXISTS(SELECT 1 FROM ANIMAL\n" +
                        "WHERE AnimalID = ?\n" +
                        "AND AdminStatus != 1000\n" +
                        "AND TechnicianStatus = 1000\n" +
                        "AND Status = 'Pending'),1,0) AS result;";
        int result = jdbcTemplate.queryForObject(sql, Integer.class, animalId);
        return result == 1;
    }

}


