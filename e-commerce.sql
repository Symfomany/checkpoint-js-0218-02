-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le :  ven. 04 mai 2018 à 07:37
-- Version du serveur :  5.6.38
-- Version de PHP :  7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  `e-commerce`
--

-- --------------------------------------------------------

--
-- Structure de la table `produit`
--

CREATE TABLE `produit` (
  `id` int(11) NOT NULL,
  `reference` int(11) NOT NULL,
  `titre` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `note` int(11) NOT NULL,
  `quantite` int(11) NOT NULL,
  `image` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `descriptif` text COLLATE utf8_unicode_ci NOT NULL,
  `prix` decimal(10,0) NOT NULL,
  `tva` decimal(10,0) NOT NULL,
  `enVente` tinyint(1) NOT NULL,
  `createAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `produit`
--
ALTER TABLE `produit`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `produit`
--
ALTER TABLE `produit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
