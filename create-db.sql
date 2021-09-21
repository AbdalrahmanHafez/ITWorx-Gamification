CREATE TABLE Employee(
id int primary key AUTO_INCREMENT,
name varchar(30),
email varchar(30) unique,
password varchar(20),
isDeveloper boolean,
isActive boolean
);

CREATE TABLE Admin(
id int primary key AUTO_INCREMENT,
name varchar(25),
email varchar(25) UNIQUE,
password varchar(20)
);


CREATE TABLE Cycle(
id int primary key AUTO_INCREMENT,
adminId int REFERENCES Admin(id),
name varchar(50),
startDate DATE,
endDate DATE
);

CREATE TABLE Activity(
id int primary key AUTO_INCREMENT,
adminId int REFERENCES Admin(id),
name varchar(50),
description TEXT,
isDeveloper boolean,
totalPoints int,
virtualRecognition boolean,
active boolean,
startDate DATE,
endDate DATE,
cycleId int REFERENCES Cycle(id)
);


CREATE TABLE Department(
	Name varchar(50) Primary Key
);


CREATE TABLE Practice(
	Name varchar(50) Primary Key
);

CREATE TABLE Badge(
id int primary key AUTO_INCREMENT,
	Name VARCHAR(50),
Description TEXT,
isDeveloper Boolean,
PointsNeeded int,
Active Boolean,
AdminId int REFERENCES Admin(id)
);
CREATE TABLE EmployeeGainBadge(
	employeeId int REFERENCES Employee(id),
	badgeId int REFERENCES Badge(id),
	Primary key(employeeId, badgeId)
);
CREATE TABLE EmployeeWorkDepartment(
	departmentName varchar(50) REFERENCES Department(Name),
	employeeId int REFERENCES Employee(id),
	Percentage int,
	startDate Date,
	endDate Date,
	Primary key(departmentName , employeeId)
);

CREATE TABLE EmployeeWorkPractice(
	PracName varchar(50) REFERENCES Practice(Name),
	EmployeeId int REFERENCES Employee(id),
	startDate Date,
	endDate Date,
	Primary key(PracName, EmployeeId)
);


CREATE TABLE EmployeeSubActivity(
	EmployeeId int REFERENCES Employee(id),
	ActivityId int REFERENCES Activity(id),
	startDate Date,
	Done Boolean,
	Primary key(EmployeeId , ActivityId ,startDate)
);


INSERT INTO `Employee` (`id`, `name`, `email`, `password`, `isDeveloper`, `isActive`) VALUES (NULL, 'ahmed', 'ahmed_khalid@gmail.com', 'pass123', '1', '1');
INSERT INTO `Employee` (`id`, `name`, `email`, `password`, `isDeveloper`, `isActive`) VALUES (NULL, 'sami', 'sami_esma3el@gmail.com', '123123', '0', '1');
INSERT INTO `Employee` (`id`, `name`, `email`, `password`, `isDeveloper`, `isActive`) VALUES (NULL, 'omar', 'omar_esma3el@gmail.com', '123123', '1', '0')
INSERT INTO `Employee` (`id`, `name`, `email`, `password`, `isDeveloper`, `isActive`) VALUES (NULL, 'heba', 'heba@gmail.com', '123123', '0', '0')


INSERT INTO `Admin` (`id`, `name`, `email`, `password`) VALUES (NULL, 'admin1', 'admin1@gmail.com', 'admin123');
INSERT INTO `Admin` (`id`, `name`, `email`, `password`) VALUES (NULL, 'admin2', 'admin2@gmail.com', 'admin123');

INSERT INTO `Cycle` (`id`, `adminId`, `name`, `startDate`, `endDate`) VALUES (NULL, '1', 'winter 2021', '2021-09-09 00:00:00', '2021-09-22 00:00:00'), (NULL, NULL, NULL, NULL, NULL);
INSERT INTO `Cycle` (`id`, `adminId`, `name`, `startDate`, `endDate`) VALUES (NULL, '1', 'Summer 2021', '2021-09-05 00:00:00', '2021-09-08 00:00:00');


INSERT INTO Badge (id, Name, Description, isDeveloper, PointsNeeded, Active, AdminId) VALUES ('1', 'badge1', 'description', '1', '300', '1', '1');

INSERT INTO `EmployeeWorkPractice` (`PracName`, `EmployeeId`, `startDate`, `endDate`) VALUES ('java', '1', '2021-09-01', NULL);
INSERT INTO `EmployeeWorkPractice` (`PracName`, `EmployeeId`, `startDate`, `endDate`) VALUES ('c#', '2', '2021-09-09', NULL);
INSERT INTO EmployeeWorkPractice (PracName, EmployeeId, startDate, endDate) VALUES ('asp', '1', '2021-09-06', '2021-09-15');

INSERT INTO EmployeeWorkDepartment (departmentName, employeeId, Percentage, startDate, endDate) VALUES ('java', '1', '19', '2021-09-06', '2021-09-15');

INSERT INTO EmployeeSubActivity (EmployeeId, ActivityId, startDate, Done) VALUES ('1', '1', '2021-09-06', '1');
INSERT INTO EmployeeSubActivity (EmployeeId, ActivityId, startDate, Done) VALUES ('2', '2', '2021-09-06', '1');
INSERT INTO EmployeeGainBadge (employeeId, badgeId) VALUES ('1', '1');
INSERT INTO Department (Name) VALUES ('python project');
INSERT INTO `Department` (`Name`) VALUES ('java project');
INSERT INTO Practice (Name) VALUES ('asp');
INSERT INTO Practice (Name) VALUES ('java');

INSERT INTO `Activity` (`id`, `adminId`, `name`, `description`, `isDeveloper`, `totalPoints`, `virtualRecognition`, `active`, `startDate`, `endDate`, `cycleId`) VALUES (NULL, '1', 'Interview new Interns', 'this some description', '1', '150', true, '1', '2021-09-07', '2021-09-10', '1');
INSERT INTO `Activity` (`id`, `adminId`, `name`, `description`, `isDeveloper`, `totalPoints`, `virtualRecognition`, `active`, `startDate`, `endDate`, `cycleId`) VALUES (NULL, '1', 'Teachnical review', 'this some description', '1', '250', true, '1', '2021-09-08', '2021-09-9', '1');
INSERT INTO `Activity` (`id`, `adminId`, `name`, `description`, `isDeveloper`, `totalPoints`, `virtualRecognition`, `active`, `startDate`, `endDate`, `cycleId`) VALUES (NULL, '1', 'New Design', 'this some description', '1', '150', true, '1', '2021-09-07', '2021-09-10', '1');


CREATE VIEW EmployeeRanking As 
select `Employee`.`id`,`Employee`.`name` AS `name`,sum(`Activity`.`totalPoints`) AS `points` from
(((`EmployeeSubActivity` join `Activity` on((`EmployeeSubActivity`.`ActivityId` = `Activity`.`id`))) join `Employee` on((`Employee`.`id` = `EmployeeSubActivity`.`EmployeeId`))) join `Cycle` on((`Cycle`.`id` = `Activity`.`cycleId`))) where ((`EmployeeSubActivity`.`Done` = 1) and (`Cycle`.`startDate` <= curdate()) and (`Cycle`.`endDate` >= curdate())) group by `Employee`.`id` order by sum(`Activity`.`totalPoints`) desc


CREATE VIEW NonDeveloperRanking AS
select E.id AS id,E.name AS name,sum(A.totalPoints) AS points from (((sql4435056.EmployeeSubActivity ESA join sql4435056.Activity A on((ESA.ActivityId = A.id))) join sql4435056.Employee E on((ESA.EmployeeId = E.id))) join sql4435056.Cycle C on((C.id = A.cycleId))) where ((ESA.Done = 1) and (C.startDate <= curdate()) and (C.endDate >= curdate()) and (E.isDeveloper = 0)) group by E.id order by A.totalPoints desc


CREATE VIEW DeveloperRanking AS
select E.id AS id,E.name AS name,sum(A.totalPoints) AS points from (((sql4435056.EmployeeSubActivity ESA join sql4435056.Activity A on((ESA.ActivityId = A.id))) join sql4435056.Employee E on((ESA.EmployeeId = E.id))) join sql4435056.Cycle C on((C.id = A.cycleId))) where ((ESA.Done = 1) and (C.startDate <= curdate()) and (C.endDate >= curdate()) and (E.isDeveloper = 1)) group by E.id order by A.totalPoints desc



CREATE VIEW DepartmentRanking AS SELECT EmployeeWorkDepartment.departmentName, SUM(Activity.totalPoints * (EmployeeWorkDepartment.Percentage/100))/COUNT(DISTINCT Employee.id) as points FROM EmployeeWorkDepartment INNER JOIN Employee on Employee.id = EmployeeWorkDepartment.employeeId INNER JOIN EmployeeSubActivity on EmployeeSubActivity.EmployeeId = Employee.id INNER JOIN Activity on Activity.id = EmployeeSubActivity.ActivityId INNER JOIN Cycle on Cycle.id = Activity.cycleId WHERE Activity.active = 1 AND Cycle.startDate <= curdate() and Cycle.endDate >= curdate() AND EmployeeSubActivity.Done=1 GROUP BY EmployeeWorkDepartment.departmentName;



CREATE VIEW PracticeRanking AS SELECT EmployeeWorkPractice.PracName, SUM(Activity.totalPoints)/COUNT(DISTINCT Employee.id) as points FROM EmployeeWorkPractice INNER JOIN Employee on Employee.id = EmployeeWorkPractice.EmployeeId INNER JOIN EmployeeSubActivity on EmployeeSubActivity.EmployeeId = Employee.id INNER JOIN Activity on Activity.id = EmployeeSubActivity.ActivityId INNER JOIN Cycle on Cycle.id = Activity.cycleId WHERE Activity.active = 1 AND Cycle.startDate <= curdate() and Cycle.endDate >= curdate() AND EmployeeSubActivity.Done=1 GROUP BY EmployeeWorkPractice.PracName





