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
    ('VET');

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
    AnimalID		INT AUTO_INCREMENT  NOT NULL,
    AnimalType		VARCHAR(20)		    NOT NULL,
    Name			VARCHAR(20)		    NOT NULL,
    Breed			VARCHAR(20)		    NOT NULL,
    Dob				DATE				Not Null,
    HealthStatus	VARCHAR(20) 	    NOT NULL,
    PRIMARY KEY (AnimalID)                      ,
    FOREIGN KEY(AnimalType) REFERENCES ANIMAL_TYPE(AnimalType)
)AUTO_INCREMENT=1000;
# add gender

-- Inserting Values.
INSERT INTO ANIMAL
VALUES
    (1001,'DOG', 'Scott', 'German Sherperd', '2019-12-12', 'In good Shape'),
    (1002,'CAT', 'Mia', 'brownish type', '2019-12-12', 'Sick');

DROP TABLE IF EXISTS USERS;
CREATE TABLE USERS
(
    UserID			INT	AUTO_INCREMENT  NOT NULL,
    Username		VARCHAR(20)		    NOT NULL,
    Password		VARCHAR(20)	 	    NOT NULL,
    Email			VARCHAR(20)		    NOT NULL,
    Fname			VARCHAR(20)		    NOT NULL,
    Lname			VARCHAR(20)		    NOT NULL,
    OtherStuffs		VARCHAR(50)		    NOT NULL, 				-- Placeholder
    AccessLevel     VARCHAR(50)		    NOT NULL,
    PRIMARY KEY(UserID),
    FOREIGN KEY(AccessLevel) REFERENCES ROLE_TYPE(RoleName))
    AUTO_INCREMENT=1000;

INSERT INTO USERS
VALUES
    (1001, 'Mike19', 'milk', 'mic.19@hotmail.com', 'Michael', 'Ah', 'Hello this is a comment', 'INSTRUCTOR'),
    (1002, 'Aleakos', 'juice', 'aleakos@hotmail.com', 'Alex', 'Leakos', '....', 'ADMIN');


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
    (1002, 4);

-- Making Alex a vet
INSERT INTO HealthPeople
VALUES
    (1002,'Vet', 3);

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
