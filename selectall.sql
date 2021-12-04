USE ensf607_vet_mockdb;

Select * from admin;
select * from animal;
select * from animal_type;
select * from appointments;
select * from classrooms;
select * from healthpeople;
select * from primarycare;
select * from role_type;
select * from student;
select * from users;


-- Test
SELECT a.AnimalID, a.Name, a.AnimalType, a.Status, u.Fname as 'Admin Name', u2.Fname as 'Technician Name', a.Breed, a.Dob, a.HealthStatus, a.ImageLink as img
FROM ANIMAL as a, USERS as u, USERS as u2
WHERE a.AdminStatus = u.UserID
AND a.TechnicianStatus = u2.UserID;