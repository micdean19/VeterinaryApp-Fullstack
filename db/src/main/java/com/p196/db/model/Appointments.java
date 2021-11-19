package com.p196.db.model;

import org.apache.tomcat.jni.Local;

import java.beans.Transient;
import java.time.LocalDate;
import java.time.Period;
import com.p196.db.model.User;
import com.p196.db.model.Animal;
public class Appointments {
//	private User user;
//	private Animal animal;
	private Integer userID;
	private Integer AnimalID;
	private String dateTime;
	private String reason;
	
	// Have to somehow declare user
	public Appointments() {
		
	}
	
	public Integer getUserID() {
		return userID;
//		return user.getUserId();
	}
	
	public void setUserID(Integer ID) {
		userID = ID;
//		user.setUserId(ID);
	}
	
	public Integer getAnimalID() {
		return AnimalID;
//		return animal.getAnimalId();
	}
	
	public void setAnimalID(Integer ID) {
		AnimalID = ID;
//		animal.setAnimalId(ID);
	}

	public String getDateTime() {
		return dateTime;
	}
	
	public void setDateTime(String date) {
		dateTime = date;
	}
	public String getreason() {
		return reason;
	}
	
	public void setreason(String reason) {
		reason = reason;
	}
	
}
