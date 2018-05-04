-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 04, 2018 at 11:56 AM
-- Server version: 5.6.38
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `catalogue`
--

-- --------------------------------------------------------

--
-- Table structure for table `produit`
--

CREATE TABLE `produit` (
  `id` int(11) NOT NULL,
  `reference` varchar(50) NOT NULL,
  `titre` varchar(255) NOT NULL,
  `note` tinyint(4) NOT NULL,
  `quantite` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `descriptif` text NOT NULL,
  `prix` float NOT NULL,
  `tva` float NOT NULL,
  `enVente` tinyint(1) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `produit`
--

INSERT INTO `produit` (`id`, `reference`, `titre`, `note`, `quantite`, `image`, `descriptif`, `prix`, `tva`, `enVente`, `createdAt`, `updatedAt`) VALUES
(1, 'iphone AA-0001-BB', 'iphone6', 5, 6, 'https://i2.cdscdn.com/pdt2/8/6/8/1/200x200/app0710120236868/rw/apple-iphone-6-a1549-128-go-version-us-4-7-sans-t.jpg', '100% fonctionnel, a passé nos 28 points de contrôle. Rayures et traces d’usure visibles. Débloqué, livré via Chronopost sans kit piéton avec chargeur et câble usb compatibles Garanti 6 mois', 193, 38.6, 0, '2018-05-04', '0000-00-00'),
(3, 'iphone5 AA-0002-BB', 'iphone 5', 3, 8, 'https://i2.cdscdn.com/pdt2/1/7/4/1/200x200/app0885909636174/rw/apple-iphone-5-16go-noir-tout-operateur.jpg', 'APPLE IPHONE 5 16GO NOIR - TOUT OPÉRATEUR - Ecran 4\" Retina 1136 x 640 px. 16/32/64 Go Mémoire interne. Processeur Processeur A6. Système d\'exploitation : apple 6.0. Wifi. Bluetooth. Gps. Appareil Photo 8 Mpixels. Valeur D.A.S. : 0.901 W/Kg.\r\n', 150, 30, 0, '2018-05-04', '2018-05-04'),
(5, 'iphone4 AA-0003-BB', 'iphone4', 1, 6, 'https://i2.cdscdn.com/pdt2/b/r/e/1/200x200/ip416nolibre/rw/iphone-4-16go-noir-tout-operateur.jpg', '100% fonctionnel,a passé nos 28 points de contrôle.Rayures profondes, légères traces de chocs. Débloqué, livré via Chronopost sans kit piéton avec chargeur et câble usb compatibles Garanti 6 mois', 75.99, 15.2, 0, '2018-05-04', '2018-05-04'),
(7, 'iphoneX AA-0004-BB', 'iphoneX', 5, 30, 'https://i2.cdscdn.com/pdt2/6/7/2/1/200x200/auc2009625290672/rw/pour-apple-iphone-x-vitre-film-protection-ecran.jpg', 'Ecran 5,8\" Super Retina HD 3D Touch (2436 x 1125 pixels) - Face ID - Systéme d\'exploitation: iOS 11 - Processeur: Apple A11 Bionic Hexa-core 2,39 GHz - Mémoire RAM 3 Go - Stockage 64 Go - Appareil photo Arriere: Dual :12 MP (Ouverture f/1.8, 28mm) + 12 MP (Ouverture f/2.4, 52mm) - Zoom numérique: jusqu’à 10 x - Appareil Avant 7 MégaPixel (Ouverture ƒ/2,2) Retina Flash - Enregistrement vidéo 4K - HD 1080p avec Wifi, 4G et Bluetooth 5.0 - Batterie: lithium‑ion (2716 mAh) - Temps de conversation Sans Fil: jusqu’à 21 heures - Lecture audio sans fil: Jusqu’à 60 heures - Couleur:SpaceGrey - Garantie 1 an', 1061.9, 212.38, 1, '2018-05-04', '2018-05-04'),
(8, 'iphone7 AA-0005-BB', 'iphone7', 4, 34, 'https://www.materiel.net/live/360426.200.200.jpg', 'Résolution APN : Capteur de 12 à 15 Mpx - Qualité d\'écran : Rétina HD - Espace de stockage : 128 Go - Type SIM : compatible carte nano SIM - Couleur : Noir - NFC - iPhone - Phablette - Apple iPhone 7 & 7 Plus - Smartphones 4G', 889, 177.8, 0, '2018-05-04', '2018-05-04');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `produit`
--
ALTER TABLE `produit`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `produit`
--
ALTER TABLE `produit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
