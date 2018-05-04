# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Hôte: localhost (MySQL 5.6.38)
# Base de données: catalogue
# Temps de génération: 2018-05-04 11:21:56 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Affichage de la table produit
# ------------------------------------------------------------

DROP TABLE IF EXISTS `produit`;

CREATE TABLE `produit` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `reference` varchar(10) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `titre` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `note` tinyint(1) DEFAULT NULL,
  `quantite` int(11) NOT NULL DEFAULT '0',
  `image` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `descriptif` text COLLATE utf8_unicode_ci,
  `prix` float NOT NULL DEFAULT '0',
  `tva` float NOT NULL DEFAULT '0.1',
  `enVente` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

LOCK TABLES `produit` WRITE;
/*!40000 ALTER TABLE `produit` DISABLE KEYS */;

INSERT INTO `produit` (`id`, `reference`, `titre`, `note`, `quantite`, `image`, `descriptif`, `prix`, `tva`, `enVente`, `createdAt`, `updatedAt`)
VALUES
	(1,'AA-1234-BB','Super Mario World',5,200,'http://www.mickeyelliottblog.com/wp-content/uploads/2015/01/Super-Mario-World-1.jpg','Super Mario World (スーパーマリオワールド, Sūpā Mario Wārudo?), sous-titré Super Mario Bros. 4 au Japon3, est un jeu vidéo de plates-formes développé et édité par Nintendo sur Super Nintendo. Le développement a été assuré par la division Nintendo EAD, dirigée par Shigeru Miyamoto ; ce dernier a réalisé le jeu aux côtés de Takashi Tezuka.',60,0.2,1,'2018-05-04 09:18:15','2018-05-04 11:04:47'),
	(2,'AA-4425-BB','Tetris',3,48,'https://i.ytimg.com/vi/QQ5U-rN7Veg/maxresdefault.jpg','Tetris sur Amiga est le célèbre puzzle-game dans lequel vous devez empiler des briques afin de constituer des lignes qui s\'effaceront au fur et à mesure de votre progression. La difficulté augmente au fil de votre avancée.',4.9,0.2,1,'2018-05-04 09:21:59','2018-05-04 10:02:41'),
	(3,'AA-4213-BB','The Legend of Zelda: Ocarina of Time',5,55,'https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_3ds_25/SI_3DS_TheLegendofZeldaOcarinaofTime3D_image1600w.jpg','Dans The Legend of Zelda : Ocarina of Time, vous incarnez Link, un jeune Kokiri devant partir à l\'aventure dans le monde menacé d\'Hyrule. Au cours de son aventure, pour la première fois en 3D, il devra s\'aider de divers objets, et particulièrement de l\'ocarina, pour voyager dans le temps et l\'espace, et ainsi vaincre Ganondorf.',39.9,0.2,1,'2018-05-04 09:21:54','2018-05-04 10:02:40'),
	(4,'AA-9748-BB','Super Metroid',4,12,'http://www.nintenderos.com/wp-content/uploads/2017/06/Super-metroid.jpg','Retrouvez la chasseuse de primes intergalactique Samus Aran dans Super Metroid sur Super Nintendo. De nouvelles aventures l\'attendent suite au vol du dernier Métroïde et la voilà repartie sur la planète Zèbes avec un tout nouvel arsenal incluant le rayon grappin et la vision à rayon X. Utilisez votre laser, des missiles et des bombes pour venir à bout des boss et restaurer ainsi un semblant de paix.',30.9,0.2,1,'2018-05-04 09:21:58','2018-05-04 10:02:09'),
	(5,'AA-5617-BB','Portal',4,3000,'http://i0.kym-cdn.com/entries/icons/original/000/000/252/thumb-050-portal-1.jpg','Portal sur PC est un jeu d\'action/réflexion à la première personne. Vous incarnez un sujet d\'expérience et êtes invité à participer à des tests au sein d\'une installation scientifique. Pour les réussir, vous devez vous servir d\'une arme qui va créer un portail vous permettant de vous déplacer instantanément d\'un point à un autre. A vous d\'utiliser efficacement votre rayon pour sortir vivant d\'Aperture Science.',9.99,0.2,1,'2018-05-04 09:21:56','2018-05-04 10:02:34');

/*!40000 ALTER TABLE `produit` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
