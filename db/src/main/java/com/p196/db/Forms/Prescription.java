package com.p196.db.Forms;

import java.util.Collection;

public class Prescription {
    public int animalId;
    public int userId;
    public int drugId;
    public String instructions;
    public String dosage;

    public Prescription(){

    }

    public Prescription(int animalId, int userId, int drugId, String instructions, String dosage) {
        this.animalId = animalId;
        this.userId = userId;
        this.drugId = drugId;
        this.instructions = instructions;
        this.dosage = dosage;
    }

    public int getAnimalId() {
        return animalId;
    }

    public void setAnimalId(int animalId) {
        this.animalId = animalId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getDrugId() {
        return drugId;
    }

    public void setDrugId(int drugId) {
        this.drugId = drugId;
    }

    public String getInstructions() {
        return instructions;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }

    public String getDosage() {
        return dosage;
    }

    public void setDosage(String dosage) {
        this.dosage = dosage;
    }

    @Override
    public String toString() {
        return "Prescription{" +
                "animalId=" + animalId +
                ", userId=" + userId +
                ", drugId=" + drugId +
                ", instructions='" + instructions + '\'' +
                ", dosage='" + dosage + '\'' +
                '}';
    }
}
