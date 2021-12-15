package com.p196.db.Forms;

public class RecordHistory {
    private Integer animalId;
    private String username;
    private String userFirstName;
    private String userLastName;
    private String comment;
    private String measurement;
    private String timestamp;

    public RecordHistory(Integer animalId, String username, String userFirstName, String userLastName, String comment, String measurement) {
        this.animalId = animalId;
        this.username = username;
        this.userFirstName = userFirstName;
        this.userLastName = userLastName;
        this.comment = comment;
        this.measurement = measurement;
    }
    public RecordHistory(Integer animalId, String username, String userFirstName, String userLastName, String comment, String measurement, String timestamp) {
        this.animalId = animalId;
        this.username = username;
        this.userFirstName = userFirstName;
        this.userLastName = userLastName;
        this.comment = comment;
        this.measurement = measurement;
        this.timestamp = timestamp;
    }

    public RecordHistory(Integer animalId, String username, String timestamp) {
        this.animalId = animalId;
        this.username = username;
        this.timestamp = timestamp;
    }

    public RecordHistory() {}

    public Integer getAnimalId() {
        return animalId;
    }

    public void setAnimalId(Integer animalId) {
        this.animalId = animalId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUserFirstName() {
        return userFirstName;
    }

    public void setUserFirstName(String userFirstName) {
        this.userFirstName = userFirstName;
    }

    public String getUserLastName() {
        return userLastName;
    }

    public void setUserLastName(String userLastName) {
        this.userLastName = userLastName;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getMeasurement() {
        return measurement;
    }

    public void setMeasurement(String measurement) {
        this.measurement = measurement;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }

    @Override
    public String toString() {
        return "RecordHistory{" +
                "animalId=" + animalId +
                ", username='" + username + '\'' +
                ", userFirstName='" + userFirstName + '\'' +
                ", userLastName='" + userLastName + '\'' +
                ", comment='" + comment + '\'' +
                ", measurement='" + measurement + '\'' +
                ", timestamp='" + timestamp + '\'' +
                '}';
    }
}
