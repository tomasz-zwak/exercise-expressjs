CREATE DATABASE  IF NOT EXISTS `express-users`;
USE `express-users`;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

--
-- Data for table `employee`
--

INSERT INTO `users` VALUES 
	(1,'Leslie','Andrews','leslie@testapp.com'),
	(2,'Emma','Baumgarten','emma@testapp.com'),
	(3,'Avani','Gupta','avani@testapp.com'),
	(4,'Yuri','Petrov','yuri@testapp.com'),
	(5,'Juan','Vega','juan@testapp.com');

