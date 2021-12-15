package com.p196.db.Forms;

import java.util.Collection;

public class Treatment {
    public int animalId;
    public int userId;
    public int treatmentStage;
    public String description;
    public String illness;

    public Treatment(int animalId, int userId, int treatmentStage, String description, String illness) {
        this.animalId = animalId;
        this.userId = userId;
        this.treatmentStage = treatmentStage;
        this.description = description;
        this.illness = illness;
    }

    public Treatment(){

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

    public int getTreatmentStage() {
        return treatmentStage;
    }

    public void setTreatmentStage(int treatmentStage) {
        this.treatmentStage = treatmentStage;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getIllness() {
        return illness;
    }

    public void setIllness(String illness) {
        this.illness = illness;
    }

    @Override
    public String toString() {
        return "Treatment{" +
                "animalId=" + animalId +
                ", userId=" + userId +
                ", treatmentStage=" + treatmentStage +
                ", description='" + description + '\'' +
                ", illness='" + illness + '\'' +
                '}';
    }
}
