-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: teverola-times-journal
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `utente`
--

DROP TABLE IF EXISTS `utente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `utente` (
  `User_ID` int(11) NOT NULL AUTO_INCREMENT,
  `Email` varchar(30) NOT NULL,
  `UserType` enum('ADMIN','UTENTE','GIORNALISTA') NOT NULL DEFAULT 'UTENTE',
  `Password` varchar(32) NOT NULL,
  `Nome` varchar(20) NOT NULL,
  `Cognome` varchar(20) NOT NULL,
  `DataInizioAbbonamento` timestamp NULL DEFAULT NULL,
  `DataFineAbbonamento` timestamp NULL DEFAULT NULL,
  `img` varchar(5000) DEFAULT NULL,
  `Salary` int(11) DEFAULT NULL,
  PRIMARY KEY (`User_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utente`
--

LOCK TABLES `utente` WRITE;
/*!40000 ALTER TABLE `utente` DISABLE KEYS */;
INSERT INTO `utente` VALUES (0,'paolo@libero.it','ADMIN','969044ea4df948fb0392308cfff9cdce','Paolo','Formola',NULL,NULL,'https://i.imgur.com/WriBt1V.png',NULL),(1,'mattia@tamburrino','ADMIN','dbc3ede8cf726a5f892a7808f647aa3e','Mattia','Tamburrino',NULL,NULL,'https://i.imgur.com/ihH3O4v.jpg',NULL),(2,'emilio@tirozzi','ADMIN','62f41279fde8210ba91f8a6712a8ce4a','emilio','tirozzi',NULL,NULL,'https://i.ebayimg.com/images/g/NLgAAOSwhCVhugZE/s-l400.jpg',NULL),(4,'daniele@gallo.it','GIORNALISTA','ccae2472b883efc000bd834426654e94','Daniele','Gallo',NULL,NULL,'https://i1.rgstatic.net/ii/profile.image/696838889951233-1543150746264_Q512/Daniele-Gallo.jpg',400),(33,'mikele@ciaramella.it','GIORNALISTA','e93c77da5590bdcbc76634a6c689f397','Michele','Ciaramella',NULL,NULL,'https://png.pngtree.com/element_our/20200609/ourlarge/pngtree-insect-grasshopper-image_2224437.jpg',1000),(42,'antonio@guerriero','UTENTE','2c946c0178ec72aaefa54f786540d301','Antonio','Guerriero','2022-07-10 16:04:07','2022-08-10 16:04:07','https://i.imgur.com/nQOFqqK.png',NULL),(43,'lele@adani','GIORNALISTA','69bfc4ef467b367e3515cdcf693e65db','Lele','Adani',NULL,NULL,'https://i.imgur.com/IppMfvs.png',4000),(44,'house@md','GIORNALISTA','2ca63cddd54f9490efad22421891a9d1','Greg','House',NULL,NULL,'https://pbs.twimg.com/profile_images/1114050050458640385/pWUDSerF_400x400.jpg',20000),(45,'elon@musk','GIORNALISTA','9e887375eaba77dc7568e4048268520e','Elon','Musk',NULL,NULL,'https://global-uploads.webflow.com/5dfd5aca7badfa129f80056c/5f865942ea0b99788774c636_ElonMuskRecommendedBooks.jpeg',10000000),(46,'anto@cannavacciuolo','GIORNALISTA','2c946c0178ec72aaefa54f786540d301','Antonino','Cannavacciuolo',NULL,NULL,'https://wine.pambianconews.com/wp-content/uploads/sites/15/2018/07/antonio-cannavacciuolo-.jpg',5000),(50,'fabio@caressa','GIORNALISTA','a53bd0415947807bcb95ceec535820ee','Fabio','Caressa',NULL,NULL,'https://pbs.twimg.com/profile_images/2898117564/9f69f7edcb93f549ae7cce520c1ee845_400x400.jpeg',3000),(61,'saldang@ciao','UTENTE','e108036bb5471442101a91e32ddea607','Salvatore','D\'Angelo','2022-07-11 12:01:03','2022-08-11 12:01:03','https://i.imgur.com/JHnhLqx.png',NULL),(62,'homer@simpson','UTENTE','dfa8327f5bfa4c672a04f9b38e348a70','Homer','Simpson','2022-07-11 14:19:31','2022-08-11 14:19:31','https://iconape.com/wp-content/files/be/382591/svg/382591.png',NULL);
/*!40000 ALTER TABLE `utente` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-11 17:29:22
