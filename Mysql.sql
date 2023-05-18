CREATE TABLE `admin` (
  `airlineid` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `hub` varchar(255) DEFAULT NULL,
  `no_aircrafts` int DEFAULT NULL,
  PRIMARY KEY (`airlineid`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `airlines`.`admin`
(`airlineid`,
`name`,
`hub`,
`no_aircrafts`)
VALUESemployee_BEFORE_DELETE
();

CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `no_fly` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

create table payments(id int auto_increment, user_id int not null, creditcard int(16) not null, fullname varchar(255) not null, primary key(id), foreign key(user_id) references user(id));CREATE TABLE `aircrafts` (
  `aircraftid` int unsigned NOT NULL AUTO_INCREMENT,
  `aircraftname` varchar(25) NOT NULL,
  `airlineid` int NOT NULL,
  `from_airport` varchar(25) NOT NULL,
  `to_airport` varchar(25) NOT NULL,
  `Departure` varchar(25) NOT NULL,
  `arrival` varchar(25) NOT NULL,
  `total_seats` int NOT NULL,
  PRIMARY KEY (`aircraftid`),
  UNIQUE KEY `aircraftname` (`aircraftname`),
  KEY `airlineid` (`airlineid`),
  CONSTRAINT `aircrafts_ibfk_1` FOREIGN KEY (`airlineid`) REFERENCES `admin` (`airlineid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE `aircraftuser` (
  `aircraft` int unsigned NOT NULL,
  `ticket` smallint unsigned NOT NULL,
  PRIMARY KEY (`aircraft`,`ticket`),
  KEY `aircraftuser_user` (`ticket`),
  CONSTRAINT `aircraftuser_aircraft` FOREIGN KEY (`aircraft`) REFERENCES `aircrafts` (`aircraftid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `aircraftuser_user` FOREIGN KEY (`ticket`) REFERENCES `tickets` (`ticketid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE `cabin` (
  `cabin_id` int NOT NULL AUTO_INCREMENT,
  `emp_id` int NOT NULL,
  `cabin_type` varchar(255) NOT NULL,
  PRIMARY KEY (`cabin_id`),
  KEY `emp_id` (`emp_id`),
  CONSTRAINT `cabin_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `employee` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
emp_addressCREATE TABLE `emp_address` (
  `id` int NOT NULL AUTO_INCREMENT,
  `emp_id` int NOT NULL,
  `address_type` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `emp_id` (`emp_id`),
  CONSTRAINT `emp_address_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `employee` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE `employee` (
  `id` int NOT NULL AUTO_INCREMENT,
  `emp_type` varchar(255) NOT NULL,
  `emp_name` varchar(255) DEFAULT NULL,
  `aircraft_id` int unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `aircraft_id` (`aircraft_id`),
  CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`aircraft_id`) REFERENCES `aircrafts` (`aircraftid`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE `pilot` (
  `pilot_id` int NOT NULL AUTO_INCREMENT,
  `emp_id` int NOT NULL,
  `pilot_type` varchar(255) NOT NULL,
  PRIMARY KEY (`pilot_id`),
  KEY `emp_id` (`emp_id`),
  CONSTRAINT `pilot_ibfk_1` FOREIGN KEY (`emp_id`) REFERENCES `employee` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE TABLE `tickets` (
  `ticketid` smallint unsigned NOT NULL AUTO_INCREMENT,
  `userid` int NOT NULL,
  `checkin` tinyint(1) NOT NULL,
  PRIMARY KEY (`ticketid`),
  KEY `userid` (`userid`),
  CONSTRAINT `tickets_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
 
 
 DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_aircrafts`(
IN airlinename VARCHAR(255),
OUT aircraftName varchar(255) ,
OUT airlineId int,
OUT fromAirport varchar(255),
OUT toAirport varchar(255),
out departure varchar(255),
OUT Arrival varchar(255),
out totalSeats int
)
BEGIN
	select aircraftname into aircraftName from aircrafts where airlineid = (select airlineid from admin where name = airlinename);
    select airlineid into airlineId from aircrafts where airlineid = (select airlineid from admin where name = airlinename);
    select from_airport into fromAirport from aircrafts where airlineid = (select airlineid from admin where name = airlinename);
    select to_airport into toAirport from aircrafts where airlineid = (select airlineid from admin where name = airlinename);
	select Departure into departure from aircrafts where airlineid = (select airlineid from admin where name = airlinename);
    select arrival into Arrival from aircrafts where airlineid = (select airlineid from admin where name = airlinename);
    select total_seats into totalSeats from aircrafts where airlineid = (select airlineid from admin where name = airlinename);
END$$
DELIMITER ;


DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `insert_employee`(
in emp_type varchar(255),
in emp_name varchar(255),
in aircraft_id int,
in subtype varchar(255),
in address_type varchar(255),
in address varchar(255)
)
BEGIN
declare em_id int;
insert into employee(emp_type, emp_name, aircraft_id) values (emp_type, emp_name, aircraft_id);
select id into em_id from employee where employee.emp_name = emp_name; 
if(emp_type = "pilot") then insert into pilot(emp_id,pilot_type) values ( em_id, subtype);
End if;
if(emp_type = "cabin") then insert into cabin(emp_id,cabin_type) values (em_id, subtype);
End IF;
insert into emp_address(emp_id, address_type, address) values (em_id,address_type,address);
END$$
DELIMITER ;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `aircrafts_view` AS select `a`.`aircraftname` AS `aircraftname`,`ad`.`name` AS `name`,`ad`.`hub` AS `hub`,`a`.`from_airport` AS `from_airport`,`a`.`to_airport` AS `to_airport`,`a`.`Departure` AS `departure`,`a`.`arrival` AS `arrival`,`a`.`total_seats` AS `total_seats`,`ad`.`no_aircrafts` AS `no_aircrafts` from (`aircrafts` `a` join `admin` `ad` on((`ad`.`airlineid` = `a`.`airlineid`)));
SELECT `aircrafts_view`.`aircraftname`,
    `aircrafts_view`.`name`,
    `aircrafts_view`.`hub`,
    `aircrafts_view`.`from_airport`,
    `aircrafts_view`.`to_airport`,
    `aircrafts_view`.`departure`,
    `aircrafts_view`.`arrival`,
    `aircrafts_view`.`total_seats`,
    `aircrafts_view`.`no_aircrafts`
FROM `airlines`.`aircrafts_view`;


CREATE DEFINER=`root`@`localhost` TRIGGER `employee_BEFORE_DELETE` BEFORE DELETE ON `employee` FOR EACH ROW BEGIN
	if(old.emp_type = "pilot") then delete from pilot p where p.emp_id = old.id;
    end If;
    if(old.emp_type = "cabin") then delete from cabin c where c.emp_id = old.id;
    end If;
END

