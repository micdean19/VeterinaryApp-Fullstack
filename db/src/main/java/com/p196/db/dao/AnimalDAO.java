package com.p196.db.dao;

import com.p196.db.model.Animal;
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
        animal.setAdminStatus(rs.getInt("AdminStatus"));
        animal.setTechnicianStatus(rs.getInt("TechnicianStatus"));
        animal.setBreed(rs.getString("Breed"));
        animal.setDob(rs.getDate("Dob").toLocalDate());
        animal.setHealthStatus(rs.getString("HealthStatus"));
//        animal.setAge();
        // animal set Status
        //animal set Admin approval
        //animal set instructor approval
        return animal;
    };

    @Override
    public List<Animal> list() {
        String sql =
                "SELECT AnimalID, Name, AnimalType, Status, AdminStatus, TechnicianStatus, Breed, Dob, HealthStatus FROM ANIMAL";
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
                        "Breed, " +
                        "Dob, " +
                        "HealthStatus " +
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
}
