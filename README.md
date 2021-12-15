# Final-Project

A full stack web development application design for a capstone project for handling animal requests at Spyhill. The database is written in mySql. The backend is a maven project with jdbc and springboot for the API. Finally frontend is written in react.

By Michael Ah-Kiow & Alex Leakos

## Video:

[Final Presentation](./Final_Presentation.mp4)
[Alternatively external link to video](https://youtu.be/hb6mLi8JM0A)

## Details & Links

-   [Jira](https://uofceng607-196.atlassian.net/jira/software/projects/P196/boards/1)
-   By Michael Ah-Kiow & Alexander Leakos
-   [Github](https://github.com/Software-Engineering-Courses-Moshirpour/final-project-uofeng607-196/tree/main)

## How to to run:

1. Download and run the ENSF607.sql attached in the Main Branch and run the script
2. Open the Maven Project (Folder is DB) and click on "existing projects" in maven.
3. Ensure that the SQL database is active and running.
4. Run the program from IDE or using the commands related to the backend (next section)
5. Now Cd To UI
6. Run Npm Install (to install required dependencies)
7. Npm Start
8. Enjoy the Program

## Commands to Run the backend from scratch using Command Line:

While in `final-project-uofeng607-196`:

-   navigate down one level into db `cd db`
-   build maven project with `mvn install`
-   run projet with `mvn exec:java -Dexec.mainClass=com.p196.db.DbApplication`
