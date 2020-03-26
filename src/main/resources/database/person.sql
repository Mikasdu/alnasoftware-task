-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 27, 2020 at 01:30 AM
-- Server version: 10.3.20-MariaDB-log
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `midult_alna`
--

-- --------------------------------------------------------

--
-- Table structure for table `person`
--

CREATE TABLE `person` (
  `id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `birthday` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `person`
--

INSERT INTO `person` (`id`, `name`, `birthday`) VALUES
(1, 'Mikas Dudzevičius', '1988-05-19'),
(2, 'Valdas Adamkus', '1926-11-03'),
(3, 'Artūras Zuokas', '1968-02-21'),
(4, 'Dalia Grybauskaitė', '1956-03-01'),
(5, 'Marijonas Mikutavičius', '1971-04-19'),
(6, 'Darius Žvirblis', '1975-03-14'),
(7, 'Laimontas Dinius', '1962-01-03'),
(8, 'Audrius Janonis', '1995-02-27'),
(9, 'Jurijus Veklenko', '1970-07-06'),
(10, 'Inga Jankauskaitė', '1981-01-10'),
(11, 'Stasys Smilinskas', '1942-02-19'),
(12, 'Gabrielius Liaudanskas', '1973-12-30'),
(13, 'Juozas Žuronas', '1989-04-01'),
(14, 'Kęstutis Valionis', '1960-11-26');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `person`
--
ALTER TABLE `person`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `person`
--
ALTER TABLE `person`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
