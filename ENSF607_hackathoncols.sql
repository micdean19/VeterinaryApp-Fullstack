DROP DATABASE IF EXISTS ensf607_vet_mockdb;
CREATE DATABASE ensf607_vet_mockdb;
USE ensf607_vet_mockdb;

DROP TABLE IF EXISTS ROLE_TYPE;
CREATE TABLE ROLE_TYPE
(
    RoleName			VARCHAR(20)				NOT NULL,
    PRIMARY KEY(RoleName));

INSERT INTO ROLE_TYPE VALUE
    ('ADMIN'),
    ('TECHNICIAN'),
    ('INSTRUCTOR'),
    ('STUDENT'),
    ('VET'),
    ("NULL");


DROP TABLE IF EXISTS USERS;
CREATE TABLE USERS
(
    UserID			INT	AUTO_INCREMENT  NOT NULL,
    Username		VARCHAR(20)		    NOT NULL,
    Password		VARCHAR(20)	 	    NOT NULL,
    Email			VARCHAR(30)		    NOT NULL,
    Fname			VARCHAR(20)		    NOT NULL,
    Lname			VARCHAR(20)		    NOT NULL,
    OtherStuffs		VARCHAR(50)		    NOT NULL, 				-- Placeholder
    AccessLevel     VARCHAR(50)		    NOT NULL,
    PRIMARY KEY(UserID),
    FOREIGN KEY(AccessLevel) REFERENCES ROLE_TYPE(RoleName))
    AUTO_INCREMENT=1000;

INSERT INTO USERS
VALUES
	(1000, "null", 'null', "null@hotmail.com", "null", "null", ".", "NULL"),
    (1001, 'Mike19', 'milk', 'mic.19@hotmail.com', 'Michael', 'Ah', 'Hello this is a comment', 'INSTRUCTOR'),
    (1002, 'Aleakos', 'juice', 'aleakos@hotmail.com', 'Alex', 'Leakos', '....', 'ADMIN'),
	(1003, 'Instructor_1', 'pt@123', 'Instructor_1@hotmail.com', 'Instructor', '1', '..', 'INSTRUCTOR'),
	(1004, 'Admin_1', 'pa', 'Admin_1@hotmail.com', 'Admin', '1', '..', 'ADMIN'),
	(1005, 'Technician', 'pe', 'Technician@hotmail.com', 'Technician', '0', '..', 'TECHNICIAN');


DROP TABLE IF EXISTS HealthPeople;
CREATE TABLE HealthPeople
(
    UserID			INT				NOT NULL,
    Type			VARCHAR(20)		NOT NULL,
    numStudents		INT				NOT NULL,
    PRIMARY KEY(UserID),
    FOREIGN KEY(UserID) REFERENCES USERS(UserID));

DROP TABLE IF EXISTS STUDENT;
CREATE TABLE STUDENT
(
    UserID			INT				NOT NULL,
    Grade			INT				NOT NULL,
    TaughtBY		INT				NOT NULL,
    PRIMARY KEY(UserID),
    FOREIGN KEY(UserID) REFERENCES USERS(UserID),
    FOREIGN KEY(TaughtBY) REFERENCES HealthPeople(UserID));

DROP TABLE IF EXISTS ADMIN;
CREATE TABLE ADMIN
(
    UserID			INT				NOT NULL,
    AccessLevel		INT				NOT NULL,
    PRIMARY KEY(UserID),
    FOREIGN KEY(UserID) REFERENCES USERS(UserID));


-- Relationships tables
DROP TABLE IF EXISTS CLASSROOMS;
CREATE TABLE CLASSROOMS
(
    StudentID		INT				NOT NULL,
    VetID			INT				NOT NULL,
    ClassName		VARCHAR(10)		NOT NULL,
    PRIMARY KEY(StudentID, VetID),
    FOREIGN KEY(StudentID) REFERENCES STUDENT(UserID),
    FOREIGN KEY(VetID) REFERENCES HealthPeople(UserID));

DROP TABLE IF EXISTS ANIMAL_TYPE;
CREATE TABLE ANIMAL_TYPE
(
    AnimalType			VARCHAR(20)				NOT NULL,
    PRIMARY KEY(AnimalType));

INSERT INTO ANIMAL_TYPE VALUE
    ('CAT'),
    ('DOG'),
    ('HORSE');

DROP TABLE IF EXISTS ANIMAL;
CREATE TABLE ANIMAL
(
    AnimalID			INT AUTO_INCREMENT  NOT NULL,
	Name				VARCHAR(20)		    NOT NULL,
    AnimalType			VARCHAR(20)		    NOT NULL,
	Status				VARCHAR(20)			NOT NULL,
	AdminStatus			INT					NOT NULL,
	TechnicianStatus	INT					NOT NULL,
    Breed				VARCHAR(20)		    NOT NULL,
    Dob					DATE				Not NULL,
    HealthStatus		VARCHAR(20) 	    NOT NULL,
    PRIMARY KEY (AnimalID)                      ,
    FOREIGN KEY(AnimalType) REFERENCES ANIMAL_TYPE(AnimalType),
	FOREIGN KEY(AdminStatus) REFERENCES USERS(UserID),
	FOREIGN KEY(TechnicianStatus) REFERENCES USERS(UserID)
)AUTO_INCREMENT=1000;
# add gender

-- Inserting Values.
INSERT INTO ANIMAL
VALUES
    (1001,'Scott', 'Dog', 'Available', '1000', '1000', 'German Shepard','2019-12-12', 'Healthy'),
    (1002,'Mia', 'Cat',  'Pending', '1004', '1000', 'A brownish type', '2019-12-12', 'Sick'),
    (1003,'Maddy', 'Cat', 'Approved', '1004', '1005', 'A brownish type', '2019-12-12', 'Healthy'),
    (1004,'Maddy', 'Cat', 'Available', '1000', '1000', 'A red type', '2019-12-12', 'Healthy');


DROP TABLE IF EXISTS Appointments;
CREATE TABLE APPOINTMENTS
(
    UserID			INT				NOT NULL,
    AnimalID		INT				NOT NULL,
    Datetime		VARCHAR(20)		NOT NULL,
    Reason			VARCHAR(20)		NOT NULL,
    PRIMARY KEY(UserID, AnimalID),
    FOREIGN KEY(UserID) REFERENCES USERS(UserID),
    FOREIGN KEY(AnimalID) REFERENCES ANIMAL(AnimalID));

DROP TABLE IF EXISTS PRIMARYCARE;
CREATE TABLE PRIMARYCARE(
                            UserID			INT				NOT NULL,
                            AnimalID		INT				NOT NULL,
                            PRIMARY KEY(UserID, AnimalID),
                            FOREIGN KEY(UserID) REFERENCES USERS(UserID),
                            FOREIGN KEY(AnimalID) REFERENCES ANIMAL(AnimalID));


-- Makign alex an admin
INSERT INTO ADMIN
VALUES
	(1000,4),
    (1002,4),
	(1004,4);

-- Making Alex a vet
INSERT INTO HealthPeople
VALUES
	(1000,"NULL", 1),
    (1002,'Vet', 3),
	(1003, "Instructor", 1),
	(1005, "Technician", 0);

INSERT INTO STUDENT
VALUES
    (1001, 80, 1002);

INSERT INTO CLASSROOMS
VALUES
    (1001,1002,'Physics');

INSERT INTO APPOINTMENTS
VALUES
    (1002, 1002, 'Monday 2nd 9am', 'Need shot');

INSERT INTO PRIMARYCARE
VALUES
    (1002,1001),
    (1002,1002);

DROP USER IF EXISTS 'mock_user'@'localhost';
FLUSH PRIVILEGES;

CREATE USER 'mock_user'@'localhost' IDENTIFIED BY 'password';

GRANT ALL PRIVILEGES ON ensf607_vet_mockdb. * TO 'mock_user'@'localhost';
