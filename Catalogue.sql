-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 04, 2018 at 08:10 PM
-- Server version: 5.7.22-0ubuntu0.16.04.1
-- PHP Version: 7.0.28-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Catalogue`
--

-- --------------------------------------------------------

--
-- Table structure for table `produits`
--

CREATE TABLE `produits` (
  `Id` int(3) NOT NULL,
  `Reference` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `Titre` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `Note` decimal(1,0) NOT NULL,
  `Quantite` int(3) NOT NULL,
  `Image` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Descriptif` text COLLATE utf8_unicode_ci,
  `Prix` float NOT NULL,
  `TVA` float NOT NULL,
  `En_vente` tinyint(1) NOT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UpdatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `produits`
--

INSERT INTO `produits` (`Id`, `Reference`, `Titre`, `Note`, `Quantite`, `Image`, `Descriptif`, `Prix`, `TVA`, `En_vente`, `CreatedAt`, `UpdatedAt`) VALUES
(1, 'DD-YYYT-CC', 'Pack de lait', '4', 78, 'img.jpg', 'Pack de 6 bouteilles de lait', 5, 5.5, 1, '2018-05-04 07:44:26', '2018-05-04 07:44:26'),
(3, 'DD-YPYT-CC', 'Sucre', '3', 89, 'img.jpg', 'Sucre en poudre', 1, 5.5, 1, '2018-05-04 07:44:55', '2018-05-04 07:44:55'),
(4, 'DA-YYYT-CP', 'Café moulu', '2', 578, 'img.jpg', 'Café moulu 250g', 7.8, 5.5, 1, '2018-05-04 07:46:55', '2018-05-04 07:46:55'),
(5, 'DD-YUTL-CC', 'Semoule', '4', 575, 'img.jpg', 'Semoule de blé fine', 1.2, 5.5, 1, '2018-05-04 07:48:12', '2018-05-04 07:48:12'),
(7, 'DD-YTTL-CC', 'Bière', '3', 0, 'img.jpg', 'Bière blonde', 4.5, 20, 0, '2018-05-04 07:48:26', '2018-05-04 07:48:26');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `produits`
--
ALTER TABLE `produits`
  ADD PRIMARY KEY (`Id`),
  ADD UNIQUE KEY `Reference` (`Reference`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `produits`
--
ALTER TABLE `produits`
  MODIFY `Id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
