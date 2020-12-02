-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 02, 2020 at 02:11 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cathedral`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `user_id` text NOT NULL,
  `lastName` text NOT NULL,
  `firstName` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `user_id`, `lastName`, `firstName`, `email`, `password`, `created_at`) VALUES
(1, '5fc58049a52b6', 'Okoye', 'Udoka', 'leviokoye@gmail.com', '$2y$10$TYZS72CEUK6pLPEADOCqqeoGJGmvNShUXMRYlGbV4BSRuMxjaG59u', '2020-12-01 00:31:38'),
(3, '5fc637b8ecf2b', 'Chukwugbo', 'Praise', 'praise@gmail.com', '$2y$10$x.nxdwqYMXYRxeI6N6Zw2OzBVghnfyXAON4AJwlpFfdUxdaD8ve7e', '2020-12-01 13:31:52');

-- --------------------------------------------------------

--
-- Table structure for table `chat`
--

CREATE TABLE `chat` (
  `id` int(11) NOT NULL,
  `user` text NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `last_name` text NOT NULL,
  `first_name` text NOT NULL,
  `phone_no` text NOT NULL,
  `email` text NOT NULL,
  `message` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `last_name`, `first_name`, `phone_no`, `email`, `message`, `created_at`) VALUES
(11, 'Muritala', 'Azeez', '07085496321', 'muritalaazeez@gmail.com', 'Good Aternoo everyone\r\nPlease i will lke for s all to be available for the youth fellowship this evening\r\n@December 21 2020, 18:00pm', '2020-12-01 11:26:58');

-- --------------------------------------------------------

--
-- Table structure for table `dss`
--

CREATE TABLE `dss` (
  `id` int(11) NOT NULL,
  `date` text NOT NULL,
  `content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `editors`
--

CREATE TABLE `editors` (
  `id` int(11) NOT NULL,
  `user_id` text NOT NULL,
  `firstName` text NOT NULL,
  `lastName` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `editors`
--

INSERT INTO `editors` (`id`, `user_id`, `firstName`, `lastName`, `email`, `password`, `created_at`) VALUES
(1, '5fbeb37145c77', 'Udoka', 'Okoye', 'leviokoye@gmail.com', '$2y$10$wecCzUgwlPpWJdb25vuRSuy/JhlMqnmkMFSJft3jhe31xQ3Vj4nhS', '2020-11-25 19:32:59'),
(5, '5fc634caa4dc8', 'Praise God', 'Chukwugbo', 'praiseGod@gmail.com', '$2y$10$B55pFcOYvUBkYh/ppxGmBOoCnLfXrSwrsO/nqOsndS8riCpqrfbAO', '2020-12-01 13:19:22');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `evt_title` text NOT NULL,
  `evt_date` text NOT NULL,
  `evt_time` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `evt_title`, `evt_date`, `evt_time`) VALUES
(22, 'MID-WEEK SERVICE', '2020-12-02', '18:00'),
(23, 'Bible Study (Zoom)', '2020-12-04', '18:00'),
(24, 'Early Morning Holy Communion Service', '2020-12-13', '07:35'),
(25, 'Main Service', '2020-12-13', '10:00');

-- --------------------------------------------------------

--
-- Table structure for table `prayer`
--

CREATE TABLE `prayer` (
  `id` int(11) NOT NULL,
  `last_name` text NOT NULL,
  `first_name` text NOT NULL,
  `prayer` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `random`
--

CREATE TABLE `random` (
  `id` int(11) NOT NULL,
  `showcase_text` text NOT NULL,
  `banner_txt` text NOT NULL,
  `live_img` text NOT NULL,
  `live_txt` text NOT NULL,
  `live_service` text NOT NULL,
  `cnt_phone` text NOT NULL,
  `cnt_email` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `random`
--

INSERT INTO `random` (`id`, `showcase_text`, `banner_txt`, `live_img`, `live_txt`, `live_service`, `cnt_phone`, `cnt_email`) VALUES
(31, 'THE MIRACLE\r\nARENA', 'Several Ways to connect With Us.\r\nChoose One, Choose All.', '----', 'LIVE SERVICE', '<iframe src=\"https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2FAllSaintsAHQ%2Fvideos%2F432945854374217%2F&show_text=false&width=560\" width=\"100%\" height=\"100%\" style={{border:\'none\';overflow:\'hidden\'}} scrolling=\"no\" frameborder=\"0\" allowfullscreen=\"true\" allow=\"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share\" allowFullScreen=\"true\"></iframe>', '08036234111', 'ahqcathedral@yahoo.com'),
(32, 'THE MIRACLE\r\nARENA', 'Several Ways to connect With Us.\r\nChoose One, Choose All.', '----', 'LIVE SERVICE', '<iframe src=\"https://web.facebook.com/plugins/video.php?href=https%3A%2F%2Fweb.facebook.com%2Fprachico%2Fvideos%2F411325069987209%2F&width=1280\" width=\"100%\" height=\"100%\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowfullscreen=\"true\" allow=\"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share\" allowFullScreen=\"true\"></iframe>', '08036234111', 'ahqcathedral@yahoo.com'),
(33, 'THE MIRACLE\r\nARENA', 'Several Ways to connect With Us.\r\nChoose One, Choose All.', '----', 'LIVE SERVICE', '<iframe src=\"https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2FAllSaintsAHQ%2Fvideos%2F432945854374217%2F&show_text=false&width=1280\" width=\"100%\" height=\"100%\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowfullscreen=\"true\" allow=\"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share\" allowFullScreen=\"true\"></iframe>', '08036234111', 'ahqcathedral@yahoo.com'),
(34, 'THE MIRACLE\r\nARENA', 'Several Ways to connect With Us.\r\nChoose One, Choose All.', '----', 'LIVE SERVICE', '<iframe src=\"https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2FAllSaintsAHQ%2Fvideos%2F432945854374217%2F&show_text=false&width=560\" width=\"560\" height=\"314\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowfullscreen=\"true\" allow=\"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share\" allowFullScreen=\"true\"></iframe>', '08036234111', 'ahqcathedral@yahoo.com'),
(35, 'THE MIRACLE\r\nARENA', 'Several Ways to connect With Us.\r\nChoose One, Choose All.', '----', 'LIVE SERVICE', '<iframe src=\"https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2FAllSaintsAHQ%2Fvideos%2F432945854374217%2F&show_text=false&width=560\" width=\"560\" height=\"100%\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowfullscreen=\"true\" allow=\"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share\" allowFullScreen=\"true\"></iframe>', '08036234111', 'ahqcathedral@yahoo.com'),
(36, 'THE MIRACLE\r\nARENA', 'Several Ways to connect With Us.\r\nChoose One, Choose All.', '----', 'LIVE SERVICE', '<iframe src=\"https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fweb.facebook.com%2FAllSaintsAHQ%2Fvideos%2F432945854374217%2F&show_text=false&width=560\" width=\"560\" height=\"100%\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowfullscreen=\"true\" allow=\"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share\" allowFullScreen=\"true\"></iframe>', '08036234111', 'ahqcathedral@yahoo.com'),
(37, 'THE MIRACLE\r\nARENA', 'Several Ways to connect With Us.\r\nChoose One, Choose All.', '----', 'LIVE SERVICE', '<iframe src=\"https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fweb.facebook.com%2FAllSaintsAHQ%2Fvideos%2F432945854374217%2F&show_text=false&width=560\" width=\"100%\" height=\"100%\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowfullscreen=\"true\" allow=\"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share\" allowFullScreen=\"true\"></iframe>', '08036234111', 'ahqcathedral@yahoo.com'),
(38, 'THE MIRACLE\r\nARENA', 'Several Ways to connect With Us.\r\nChoose One, Choose All.', '----', 'LIVE SERVICE', '<iframe src=\"https://web.facebook.com/plugins/video.php?href=https%3A%2F%2Fweb.facebook.com%2FAllSaintsAHQ%2Fvideos%2F3527985910625218%2F&width=1280\" width=\"100%\" height=\"100%\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowfullscreen=\"true\" allow=\"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share\" allowFullScreen=\"true\"></iframe>', '08036234111', 'ahqcathedral@yahoo.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `dss`
--
ALTER TABLE `dss`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `editors`
--
ALTER TABLE `editors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `prayer`
--
ALTER TABLE `prayer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `random`
--
ALTER TABLE `random`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `chat`
--
ALTER TABLE `chat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `dss`
--
ALTER TABLE `dss`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `editors`
--
ALTER TABLE `editors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `prayer`
--
ALTER TABLE `prayer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `random`
--
ALTER TABLE `random`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
