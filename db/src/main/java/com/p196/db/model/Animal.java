package com.p196.db.model;

import org.apache.tomcat.jni.Local;

import java.beans.Transient;
import java.time.LocalDate;
import java.time.Period;

public class Animal
{
    private Integer animalId;
    private String name;
    private String animalType;
    private String status;
    private Integer adminStatus;
    private Integer technicianStatus;
    private String breed;
    private LocalDate dob;
    private String healthStatus;
//    private Integer age;
    // Add 3 attributes + their getters and setters

    public Animal() {
    }

    public Integer getAnimalId() {
        return animalId;
    }

    public void setAnimalId(Integer animalId) {
        this.animalId = animalId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

//    public Integer getAge() {
//        return age;
//    }
//
//    public void setAge() {
//        this.age = Period.between(dob, LocalDate.now()).getYears();
//    }

    public String getAnimalType() {
        return animalType;
    }

    public void setAnimalType(String animalType) {
        this.animalType = animalType;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public String getHealthStatus() {
        return healthStatus;
    }

    public void setHealthStatus(String healthStatus) {
        this.healthStatus = healthStatus;
    }

    @Override
    public String toString() {
        return "AnimalRegistration{" +
                "animalId=" + animalId +
                ", animalType='" + animalType + '\'' +
                ", name='" + name + '\'' +
                ", breed='" + breed + '\'' +
                ", dob=" + dob +
                ", healthStatus='" + healthStatus + '\'' +
//                ", age=" + age +
                '}';
    }

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Integer getAdminStatus() {
		return adminStatus;
	}

	public void setAdminStatus(Integer adminStatus) {
		this.adminStatus = adminStatus;
	}

	public Integer getTechnicianStatus() {
		return technicianStatus;
	}

	public void setTechnicianStatus(Integer technicianStatus) {
		this.technicianStatus = technicianStatus;
	}
}
