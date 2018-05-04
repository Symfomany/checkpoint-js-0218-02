-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 04, 2018 at 02:33 PM
-- Server version: 5.7.22-0ubuntu0.16.04.1
-- PHP Version: 7.0.28-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `checkpoint`
--

-- --------------------------------------------------------

--
-- Table structure for table `produits`
--

CREATE TABLE `produits` (
  `id` tinyint(4) NOT NULL,
  `reference` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `titre` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `note` tinyint(4) NOT NULL,
  `quantité` tinyint(4) NOT NULL,
  `image` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `descriptif` text COLLATE utf8_unicode_ci NOT NULL,
  `prix` float NOT NULL,
  `tva` float NOT NULL,
  `enVente` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `produits`
--

INSERT INTO `produits` (`id`, `reference`, `titre`, `note`, `quantité`, `image`, `descriptif`, `prix`, `tva`, `enVente`, `createdAt`, `updatedAt`) VALUES
(1, 'AA-0123-BB', 'test', 2, 2, 'https://yt3.ggpht.com/-v0soe-ievYE/AAAAAAAAAAI/AAAAAAAAAAA/OixOH_h84Po/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg', 'toto à la plage', 5, 2, 1, '2018-05-04 09:52:45', '2018-05-04 09:52:45'),
(5, 'CB-1100-RS', 'Moto trop bien', 5, 1, 'Honda CB1100  10  1.jpg', 'Moto qui lève en 4', 14999, 700, 1, '2018-05-04 09:54:51', '2018-05-04 09:54:51'),
(6, 'JS-0000-X2', 'Jesus 2, le retour', 2, 1, 'jesus-2-le-retour.jpg', 'Il est de retour... !!', 59999.9, 0, 1, '2018-05-04 09:57:18', '2018-05-04 09:57:18'),
(7, 'TT-5200-DF', 'Drogue', 1, 2, 'https://media.giphy.com/media/13XfETre3zugg0/giphy.gif', 'Il ne faut pas toucher.', 24, 0, 0, '2018-05-04 09:58:04', '2018-05-04 09:58:04');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `produits`
--
ALTER TABLE `produits`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `produits`
--
ALTER TABLE `produits`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
