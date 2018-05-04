-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Ven 04 Mai 2018 à 14:02
-- Version du serveur :  5.7.21-0ubuntu0.16.04.1
-- Version de PHP :  7.0.28-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `catalog`
--

-- --------------------------------------------------------

--
-- Structure de la table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `reference` varchar(10) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'AA-XXXX-BB',
  `title` text COLLATE utf8_unicode_ci NOT NULL,
  `score` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `image` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `vat` decimal(10,0) NOT NULL DEFAULT '20',
  `onSale` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `products`
--

INSERT INTO `products` (`id`, `reference`, `title`, `score`, `quantity`, `image`, `description`, `price`, `vat`, `onSale`, `createdAt`, `updatedAt`) VALUES
(1, 'RT-BOWI-23', 'David Bowie, “Welcome to the Blackout” (EMI/Warner)', 1, 8, 'http://www.telerama.fr/sites/tr_master/files/styles/simplecrop1000/public/illustrations/thumbnails/bowie.jpg?itok=dFgeEF0v&sc=e18678551da4c799bd3ac0190a2a9dee', 'On ne se refait pas. Chaque Disquaire Day nous offre une nouvelle plongée au fond du fond des archives de Bowie (plus ou moins) et on parvient encore à trouver ça excitant. Au premier rang, cette année, un triple album live enregistré à l’Earls Court de Londres pendant la période de feu de 1978 et qui met en avant les titres de la période berlinoise tout chauds sortis des presses. Pochette élégante qui ne manquera pas de chauffer les esprits à propos des provocations du Thin White Duke (salut nazi?) en pleine période de dégrisement. A part ça, on a droit à une démo de Let’s Dance, à un album promo berlinois et la réédition du premier album de 1967, en mono et stéréo. N’en jetez plus !', '40', '20', 1, '2018-05-04', '2018-05-04'),
(2, 'AA-GRUS-34', 'Dave Grusin, “The Friends of Eddie Coyle” (WeWantSounds)', 4, 8, 'http://www.telerama.fr/sites/tr_master/files/styles/simplecrop1000/public/illustrations/thumbnails/28763673_1453069524821739_8804544976680648704_n.jpg?itok=iFuhRgDC&sc=b90ee15121c3995afcbb167941637bee', 'Oscarisé pour la musique de Milagro, Dave Grusin était un envoyé spécial de la planète jazz électrique dans les cercles du Nouvel Hollywood. L’acteur modeste d’un monde en fusion. Il a notamment beaucoup composé pour le Sidney Pollack des grandes années (Les Trois Jours du Condor) et réalisé des perles obscures, dont celle-ci n’est pas la moindre. Fantaisie jazz-funk sophistiquée, truffée de breaks et autres surprises, et arrangée avec faste. L’emballage pétillant d’un petit polar signé Peter Yates (avec Robert Mitchum en fin de course).', '35', '20', 1, '2018-05-01', '2018-05-04'),
(3, 'AA-YOUN-A3', 'Neil Young, “Roxy - Tonight\'s The Night Live” (Reprise/Warner)', 5, 4, 'http://www.telerama.fr/sites/tr_master/files/styles/simplecrop1000/public/assets/images/okl_okl_59536.jpg?itok=Qx4A579O', 'On peut imaginer que les publications posthumes de Neil Young seront limitées vu le soin que l’artiste met à rendre publique ses archives depuis quelques années. Parmi tout ce qu’il garde dans ses tiroirs, on peut difficilement imaginer plus excitant que ce concert de 1973 à Los Angeles. D’abord parce que c’était l’inauguration d’un lieu mythique, le Roxy, sur Sunset Boulevard, et parce qu’il jouait pour la première fois sur scène les morceaux qu’il venait d’enregistrer à Hollywood. De World on a string à Albuquerque, ces chansons allaient former la matière (deux ans plus tard) de l’album sombre et culte, Tonight’s The Night, écrit pour les amis que la drogue emportait. Une édition spéciale sera dans les bacs du Disquaire Day, mais l’album sortira dans la foulée.', '34', '20', 1, '2018-04-01', '2018-05-23'),
(4, 'AA-ARES-OU', 'Areski, “Un beau matin” (Le souffle continu)', 3, 3, 'http://www.telerama.fr/sites/tr_master/files/styles/simplecrop1000/public/illustrations/thumbnails/areski_1.jpg?itok=TWxdpnLr&sc=b330903bc4398fa51c217246c58d84de', 'Toujours sur la brêche, le disquaire indépendant parisien à l’enseigne du souffle continu poursuit son exploration du riche catalogue des agitateurs de la pop française des années 70. D’ascendance kabyle, Arezki Belkacem est connu pour sa collaboration aventureuse au long cours avec sa compagne Brigitte Fontaine (dont le très culte Comme à la radio, avec l’Art Ensemble of Chicago) et pour ses frasques poético-musicales avec Jacques Higelin. Un beau matin est une vraie curiosité, le seul album très libre et très solaire qu’il ait enregistré sous son nom à l’époque (1970). Une réédition qui tombe à pic.', '28', '20', 1, '2018-02-05', '2018-05-04'),
(5, 'AA-JEFF-3Z', 'Jeff Buckley, “Live At Sin’é” (Sony Legacy)', 4, 23, 'http://www.telerama.fr/sites/tr_master/files/styles/simplecrop1000/public/assets/images/buckley.jpg?itok=dHtUxoxI', 'A l’origine, c’est un disque de quatre titres, l’acte de naissance scénique du fils de Tim Buckley qui se produisait , à l’orée des années 90, dans un café riquiqui de l’Est Village, sur Saint Mark’s Place. Déjà réédité dans sa version « étendue » (37 morceaux et beaucoup de parlotte), les concerts déboulent maintenant dans un coffret de quatre vinyles qui balaient le premier répertoire (Dylan, Cohen…) du jeune homme lyrique. Dans la série premier pas, Arcade Fire publie aussi en édition limitée le premier EP, alias Us Kids Know, avec lequel ils ont brisé la glace.', '32', '20', 1, '2018-05-06', '2018-05-04');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
