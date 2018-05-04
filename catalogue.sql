-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Ven 04 Mai 2018 à 13:55
-- Version du serveur :  5.7.22-0ubuntu0.16.04.1
-- Version de PHP :  7.0.28-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `catalogue`
--

-- --------------------------------------------------------

--
-- Structure de la table `produits`
--

CREATE TABLE `produits` (
  `id` int(11) NOT NULL,
  `reference` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `titre` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  `note` tinyint(4) DEFAULT NULL,
  `quantite` int(11) NOT NULL DEFAULT '0',
  `image` varchar(400) COLLATE utf8_unicode_ci DEFAULT NULL,
  `descriptif` text COLLATE utf8_unicode_ci NOT NULL,
  `prix` float DEFAULT NULL,
  `tva` float DEFAULT NULL,
  `enVente` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `produits`
--

INSERT INTO `produits` (`id`, `reference`, `titre`, `note`, `quantite`, `image`, `descriptif`, `prix`, `tva`, `enVente`, `createdAt`, `updatedAt`) VALUES
(1, 'AA-XXXX-BB', 'Shampoing TODO', 1, 5, 'https://img.over-blog-kiwi.com/2/17/57/47/20161104/ob_d7d58e_blog.jpg', 'Un shampoing tout doux pour des cheveux soyeux, c\'est cher mais ça vaut le coup...', 250, NULL, 1, '2018-05-04 09:42:28', '2018-05-04 10:04:04'),
(2, 'CC-XXXX-CC', 'Corde Jumpy', 1, 1, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB8aTiPRIzAS14i3s0YVye64PM23fITiJLMwB-3fAx0sRJWzTX1w', 'Corde à Sauter Jumpy, faire de l\'exercice, c\'est bien', 20.5, 20, 1, '2018-05-04 09:44:45', '2018-05-04 10:00:51'),
(3, 'DD-XXXX-DD', 'Les Chevaliers du Fiel', 0, 100, 'https://www.jds.fr/medias/image/les-chevaliers-du-fiel-noel-d-enfer-50548-128-128.jpg', 'Un DVD vraiment pas terrible, pour un mauvais moment en famille', 0.5, 20, 1, '2018-05-04 09:45:56', '2018-05-04 10:53:38'),
(4, 'EE-XXXX-EE', 'Lampe Flashy', 2, 0, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9_HFIkh2Qj96_7AypY-4p4KrCZ_xMMPK58EwZ_V94zWev2Ao6', 'Lampe Flashy, éclaire la nuit', 15, 20, 0, '2018-05-04 09:46:52', '2018-05-04 10:54:40'),
(5, 'FF-XXXX-FF', 'Accordéon', 3, 1, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9otRQonxvcTkFUuK-ZSKDBHjg2tfcoSv5eSRhtQiOQSwnETmBjA', 'L\'accordéon original de Yvette Horner. Ça décoiffe!', 3000, 20, 1, '2018-05-04 09:48:12', '2018-05-04 10:53:55'),
(6, 'ZZ-ZZZZ-ZZ', 'TESTING', 1, 0, NULL, 'DEFZAGVRZV', 234, NULL, 1, '2018-05-04 10:22:23', '2018-05-04 10:30:09');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `produits`
--
ALTER TABLE `produits`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `produits`
--
ALTER TABLE `produits`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
