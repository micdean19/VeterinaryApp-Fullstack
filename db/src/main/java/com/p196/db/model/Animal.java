package com.p196.db.model;

import com.nimbusds.jose.shaded.json.JSONObject;
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
    private String adminStatus;
    private String technicianStatus;
    private String breed;
    private LocalDate dob;
    private String healthStatus;
    private Integer age;
    private String image;

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

    public Integer getAge() {
        return age;
    }

    public void setAge() {
        this.age = Period.between(dob, LocalDate.now()).getYears();
    }

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
                ", age=" + age +
                '}';
    }

    public JSONObject toJson() {
        JSONObject json = new JSONObject();
        json.put("animalId", animalId);
        json.put("animalType", animalType);
        json.put("name", name);
        json.put("breed", breed);
        json.put("dob", dob);
        json.put("healthStatus", healthStatus);
        json.put("age", age);
        return json;
    }

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getAdminStatus() {
		return adminStatus;
	}

	public void setAdminStatus(String string) {
		this.adminStatus = string;
	}

	public String getTechnicianStatus() {
		return technicianStatus;
	}

	public void setTechnicianStatus(String technicianStatus) {
		this.technicianStatus = technicianStatus;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}
}
