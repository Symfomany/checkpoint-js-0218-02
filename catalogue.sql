-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Ven 04 Mai 2018 à 12:41
-- Version du serveur :  5.7.22-0ubuntu0.16.04.1
-- Version de PHP :  7.0.28-1+ubuntu16.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `checkpoint2`
--

-- --------------------------------------------------------

--
-- Structure de la table `catalogue`
--

CREATE TABLE `catalogue` (
  `id` int(11) NOT NULL,
  `reference` varchar(255) COLLATE utf16_unicode_ci NOT NULL,
  `titre` varchar(255) COLLATE utf16_unicode_ci DEFAULT NULL,
  `note` int(11) DEFAULT NULL,
  `quantite` int(11) DEFAULT NULL,
  `image` varchar(255) COLLATE utf16_unicode_ci DEFAULT NULL,
  `descriptif` text COLLATE utf16_unicode_ci,
  `prix` int(11) DEFAULT NULL,
  `tva` int(11) DEFAULT NULL,
  `enVente` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_unicode_ci;

--
-- Contenu de la table `catalogue`
--

INSERT INTO `catalogue` (`id`, `reference`, `titre`, `note`, `quantite`, `image`, `descriptif`, `prix`, `tva`, `enVente`, `createdAt`, `updatedAt`) VALUES
(1, 'AA-543D-BB', 'bottes', 3, 12, 'https://www.cupofdog.fr/images/imagecache/Lot-de-4-bottes-Skin-noir-bo2_170x94.jpg', '4 bottes pour chihuahua', 9, 6, 1, '2018-05-15 00:00:00', '2018-05-22 00:00:00'),
(2, 'AA-FDFD-BB', 'Lunettes panthere', 5, 55, 'https://www.cupofdog.fr/images/imagecache/lunette1_1421094028_170x136.jpg', 'Lunettes pour avoir la classe à Dallas', 55, 6, 0, '2018-05-12 08:00:00', '2018-05-21 00:13:00'),
(3, 'AA-FEED-BB', 'gilet de sauvetage', 2, 22, 'https://www.cupofdog.fr/images/imagecache/Gilet-de-sauvetage-Ezydog-DFD-ma227_170x135.jpg', 'Et glou et glou et glou', 44, 6, 0, '2018-04-08 23:13:00', '2018-05-06 00:00:00'),
(4, 'AA-FOOD-BB', 'Sweat superman', 4, 44, 'https://www.cupofdog.fr/images/imagecache/Sweat-Superman-ma223_158x170.jpg', 'Super pouvoir non fournis', 112, 6, 0, '2018-05-01 06:11:13', '2018-05-02 00:00:00'),
(5, 'AA-44FD-BB', 'Bonnet panthere', 3, 45, 'https://www.cupofdog.fr/images/imagecache/Bonnet-Puppy-Angel-Leo-Hat-AC135-BR_170x170.jpg', 'Assorti avec les lunettes', 44, 6, 1, '2018-05-04 04:00:00', '2018-05-05 00:00:00');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `catalogue`
--
ALTER TABLE `catalogue`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `catalogue`
--
ALTER TABLE `catalogue`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
