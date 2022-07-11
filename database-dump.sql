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
-- Table structure for table `articolo`
--

DROP TABLE IF EXISTS `articolo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `articolo` (
  `ID_Article` int(11) NOT NULL AUTO_INCREMENT,
  `Titolo` varchar(100) NOT NULL,
  `Argomento` varchar(20) NOT NULL,
  `body` mediumtext NOT NULL,
  `img` varchar(2048) DEFAULT NULL,
  `DataPubblicazione` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Utente` int(11) NOT NULL,
  PRIMARY KEY (`ID_Article`),
  KEY `Utente` (`Utente`),
  CONSTRAINT `vincolo_user_id()` FOREIGN KEY (`Utente`) REFERENCES `utente` (`User_ID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articolo`
--

LOCK TABLES `articolo` WRITE;
/*!40000 ALTER TABLE `articolo` DISABLE KEYS */;
INSERT INTO `articolo` VALUES (3,'COME USARE CORRETTAMENTE UN OSCILLOSCOPIO','science','L\'Oscilloscopio è lo strumento piu\'noto e importante nell\'uso quotidiano all\'interno di un laboratorio.\nEsso ha ottenuto un cosi notevole successo nel passato poiché permette di visualizzare come sono fatte\nrealmente le forme d\'onda. Praticamente è un dispositivo che visualizza una qualunque funzione tra due\nvariabili, purché riconducibili a tensioni elettriche.\nNell\'uso piu\' comune l\'Oscilloscopio effettua la presentazione sullo schermo dell\'andamento nel tempo\n(asse X orizzontale) di una tensione elettrica (asse Y verticale).\nL\'elemento essenziale dell\'Oscilloscopio e\' il tubo a raggi catodici (CRT), nel quale un fascio di elettroni\nemessi dal catodo, viene focalizzato e accellerato colpendo internamente lo schermo fluorescente del tubo.\nIl fosforo che riveste la parete interna del tubo produce un punto luminoso visibile. Il fascetto di elettroni\nviene deflesso sia in orizzontale che in verticale da una coppia di placche di deflessione , poste all\'interno\ndel collo del tubo e comandate da tensioni elettriche applicate ai loro capi.','https://i.imgur.com/CATSvkB.png','2022-07-11 11:57:05',4),(11,'Vita su Marte','terraformazione','vita su marte??? \nA questa domanda non sappiamo ancora dare una risposta vera e propria ma si spera che in futuro la situazione possa cambiare. In che modo?? \nRendendolo più simile possibile alla terra facendo quella che è chiamata come : TERRAFORMAZIONE DI MARTE!!!!','https://thethoughtfulgamer.com/wp-content/uploads/2020/04/20190928_185911-1024x768.jpg','2022-07-09 20:05:09',33),(24,'Il ritorno di pogba!','calcio','A Torino è esplosa la febbre per Paul Pogba. A distanza di 6 anni, il centrocampista francese riabbraccia il popolo della Juventus, nonostante l’ufficialità debba ancora arrivare. Il suo sbarco in Italia delle ultime ore ha, di fatto, dato il via alla seconda vita in bianconero dell’ex Manchester United, che vuole riprendere da dove ha lasciato; infatti, come riporta Romeo Agresti, il polpo ha deciso di vestire la maglia n. 10, lasciata libera da Paulo Dybala. Proprio lo stesso numero che ha vestito nella sua ultima stagione juventina.','https://i.imgur.com/Yd5xZei.png','2022-07-10 16:17:13',43),(25,'LUKAKU ALL\'INTER !!!','calcio','MILANO - 321 giorni dopo, Romelu Lukaku è tornato all\'Inter. Un desiderio fortissimo quello dell\'attaccante belga, che oggi si è finalmente realizzato. Nel suo secondo primo giorno in nerazzurro Big Rom si è raccontato con un\'intervista ai microfoni di Inter TV: un mix di emozioni, ricordi e soprattutto tantissima voglia di ricominciare.\nBentornato Romelu, che emozione provi nel tornare all\'Inter?\n\"È un’emozione forte, penso che quella che ho vissuto un anno fa con questa squadra sia stata una bella storia. Per la squadra, per i tifosi e anche per me personalmente. L’Inter mi ha dato tanto e spero adesso di fare anche meglio di prima. Adesso è arrivato il momento di lavorare tutti insieme, sperando di fare meglio di prima\".\n95 presenze e 64 gol con l’Inter: la tua nuova avventura nerazzurra riparte da questi numeri.\n\"Non sono un individualista, penso sempre alla squadra. Voglio che l’Inter vinca: farò tutto il possibile sia in allenamento sia in campo per far vincere l’Inter\".','https://i.imgur.com/E1nBKtW.png','2022-07-10 16:33:48',43),(26,'Elon musk compra twitter per 44 miliardi di dollari!!!','social','«Ok, il prezzo è giusto». Per 44 miliardi di dollari, Twitter può passare nelle mani di Elon Musk. Il board del social network - il cui titolo ieri guadagnava oltre il 5% a un\'ora dalla chiusura a Wall Street, ha approvato all\'unanimità l\'acquisizione da parte del patron di Tesla sottolineando che rappresenta la «strada migliore» per i soci e offre un sostanziale premio in contanti. L\'acquisizione dovrebbe chiudersi entro l\'anno, quando il social network dovrebbe lasciare Wall Street e diventare un società privata interamente nelle mani di Musk.\n\nResta da capire se l\'aumento del valore dell\'operazione, rispetto ai 43 miliardi proposti dal ceo di Tesla 11 giorni fa, sia legato a un miglioramento dell\'offerta o a un più attento conteggio dei titoli coinvolti.','https://dimages2.corriereobjects.it/files/main_image_mobile/files/fp/uploads/2022/07/09/62c940edaa54b.r_d.640-640-3336.jpeg','2022-07-10 19:22:17',45),(27,'Recensione terraforming mars !!','giochi','In Terraforming Mars ogni giocatore prenderà il ruolo di una Corporation che ha come scopo rendere Marte abitabile e nel frattempo guadagnare il più possibile per i suoi sforzi (in fin dei conti parliamo di Corporation, non di enti benefici).\n\nUna volta che tutti i parametri di Terraformazione (Oceani, Temperatura ed Ossigeno) saranno arrivati al massimo, chi avrà più Punti Vittoria vincerà la partita.\nAd inizio partita la mappa di Marte si presenterà brulla ma ricca di risorse da sfruttare; la Temperatura del pianeta sarà ampiamente sotto lo zero, non ci saranno Oceani o piante e la percentuale di Ossigeno sarà praticamente nulla. \n\nNel mezzo di questa situazione abbastanza desolata verranno distribuite le Corporation ai giocatori, ognuna con delle caratteristiche peculiari e poteri unici, che permettono di orientare la strategia in maniera radicalmente diversa.\n\nScelte le Corp i giocatori pescano 10 carte e con i Megacrediti forniti inizialmente dalla propria Corporation dovranno acquistare quelle che intendono tenere, scartando le altre.','https://nerdciencia.com.br/wp-content/uploads/2022/03/WQkoSD6UaUce6Wjskzduf9-1200-80-350x250.jpg','2022-07-10 19:52:23',45),(28,'PIZZA MARGHERITA FACILE','cibo','È la pizza per antonomasia, creata, secondo tradizione, a Napoli nel 1889 dal pizzaiolo Raffaele Esposito per l’allora regina d’Italia, Margherita di Savoia. Ve la propongo in una ricetta “facile” e veloce, che prevede l’uso della pasta pronta, accorciando di molto la preparazione. Una ricetta ideale, quindi, per chi vuole godersi una buona pizza, ma non va di fretta. Poi, ovviamente, ci sono varianti per tutti i gusti: marinara, vegetariana, regina… l’elenco potrebbe non fermarsi mai! La pizza infatti è un piatto versatile e gustosissimo che ognuno può farcire a suo piacere. Bastano pochi semplici ingredienti per preparare l’impasto base, e poi via con la fantasia: a ciascuno la sua pizza!\nINGREDIENTI\n800 g Pasta da pane pronta\n400 g passata di pomodoro\n250 g mozzarella\n4 cucchiai olio extravergine di oliva\nq.b. basilico\nq.b. sale\n','https://www.ilgiornaledelcibo.it/wp-content/uploads/2021/01/pizza-margherita-facile-876x451.jpg','2022-07-10 19:58:23',46),(29,'CASATIELLO','cibo','Qualcosa che sul tavolo della colazione di Pasqua non può mancare: il casatiello napoletano. Fragrante e saporito si accompagna ottimamente con salumi e formaggi ma se la cava benissimo anche da solo. Non è difficile prepararlo, ha solo bisogno di tempo per crescere bene!\nINGREDIENTI\n650 gr farina bianca\n225 gr strutto\n40 gr lievito di birra\n2 cucchiai pecorino romano grattugiato\n2 cucchiai Parmigiano Reggiano grattugiato\n100 gr sfrizzoli di maiale o salame a dadini\n1 cucchiaino sale\npepe nero macinato\n','https://www.ilgiornaledelcibo.it/wp-content/uploads/2014/04/casatiello.jpg','2022-07-10 20:05:08',46),(30,'DR. HOUSE - MEDICAL DIVISION','science','Gregory House è un medico diagnosta specializzato in nefrologia e infettivologia dal carattere difficile, rude, cinico e più interessato alle malattie che ai pazienti che si trova a curare. Affetto da una vistosa zoppia alla gamba destra è continuamente sotto l\'effetto del Vicodin, potente antidolorifico che gli permette di sopportare questa menomazione. Affiancato da un team di medici altrettanto brillanti, lavora al fittizio Princeton - Plainsboro Teaching Hospital del New Jersey e a lui vengongo sottoposti i casi clinici più intricati e disperati. Le vicende mediche si intrecciano con quelle private di House e dei suoi collaboratori: Cameron, una giovane immunologa, Foreman, un neurologo di colore dal passato non proprio limpido, Chase, figlio di un noto medico e specializzato in terapia intensiva e rianimazione. Hanno parte importante nella storia anche Wilson, amico di Greg da molti anni e stimato oncologo e la dottoressa Lisa Cuddy, direttore sanitario dell\'ospedale.','https://www.corriere.it/methode_image/2020/10/28/Spettacoli/Foto%20Spettacoli/dr%20house%20loc-cf-cropped-0-0-628-474.jpg','2022-07-10 20:19:50',44),(32,'Totti dà l\'addio al calcio giocato','calcio','“Maledetto tempo. Purtroppo è arrivato questo momento che speravo non arrivasse mai. Spegnere la luce non è facile, adesso ho paura e questa volta sono io che ho bisogno di voi e del vostro calore”. E un tifo già emotivo e passionale come quello della Roma scoppia in lacrime, perché queste parole sono pronunciate da Francesco Totti appena dopo il suo addio al calcio giocato, il 28 maggio 2017, davanti a un “Olimpico” che ha sempre fatto di tutto per rimandare questo giorno.','https://img-prod.sportmediaset.mediaset.it/binary/40.$plit/C_29_fotogallery_1021930__ImageGallery__imageGalleryItem_30_image.jpg','2022-07-10 21:00:06',50),(33,'Italia mondiali 2006, 16 anni fa gli azzurri diventavano campioni del mondo','calcio','La cavalcata mondiale\nNel Mondiale tedesco l’Italia viene sorteggiata nel girone con Ghana, Stati Uniti e Repubblica Ceca. Il debutto avviene il 12 giugno contro la formazione africana, battendo gli avversari 2-0 grazie alle reti di Andrea Pirlo e Vincenzo Iaquinta. Con gli Stati Uniti l’Italia non va oltre l’1-1, per poi vincere 2-0 contro la Repubblica Ceca con i sigilli di Materazzi e Filippo Inzaghi. Nel turno successivo l’Italia trova l’Australia che supera non senza qualche difficoltà solo al 90’ col gol da calcio di rigore di Totti.\nAi quarti di finale l’Italia supera agevolmente l’Ucraina 3-0 con le reti di Zambrotta e alla doppietta di Luca Toni.\nIn semifinale arriva la vittoria 2-0 ai supplementari contro la Germania con Grosso e Del Piero, prima del successo in finale contro la Francia ai rigori dopo il pari di Materazzi.\nDella Nazionale dell’epoca campione del Mondo l’unico calciatore ancora in attività è Gianluigi Buffon, superati i 40 anni in forza al Parma in Serie B, degli altri oggi invece fanno gli allenatori anche con buoni risultati come Grosso, Cannavaro, Pirlo, Gattuso e Inzaghi.','https://cdn.mondialidicalcio.org/wp-content/mondialidicalcio/uploads/2013/12/italia-campione-del-mondo-1024x681.jpg','2022-07-10 21:01:30',50);
/*!40000 ALTER TABLE `articolo` ENABLE KEYS */;
UNLOCK TABLES;

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

-- Dump completed on 2022-07-11 16:36:29
