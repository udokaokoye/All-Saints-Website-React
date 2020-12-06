-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 06, 2020 at 04:36 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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
  `message` text NOT NULL,
  `likes` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
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

--
-- Dumping data for table `dss`
--

INSERT INTO `dss` (`id`, `date`, `content`) VALUES
(11, '2020-12-04', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\r\nWhy do we use it?\r\n\r\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\r\n\r\nWhere does it come from?\r\n\r\nContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\r\n\r\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.\r\n');

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
(28, 'Holy Communion Service - Mattins', '2020-12-06', '10:00');

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` int(11) NOT NULL,
  `fullname` text NOT NULL,
  `email` text NOT NULL,
  `phone` text NOT NULL,
  `giving_for` text NOT NULL,
  `amount` text NOT NULL,
  `ref` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`id`, `fullname`, `email`, `phone`, `giving_for`, `amount`, `ref`, `created_at`) VALUES
(7, 'fsdds', 'leviokoye@gmail.com', 'sdf', 'Tithe', '500', '248581935', '2020-12-04 20:23:37');

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
(38, 'THE MIRACLE\r\nARENA', 'Several Ways to connect With Us.\r\nChoose One, Choose All.', '----', 'LIVE SERVICE', '<iframe src=\"https://web.facebook.com/plugins/video.php?href=https%3A%2F%2Fweb.facebook.com%2FAllSaintsAHQ%2Fvideos%2F3527985910625218%2F&width=1280\" width=\"100%\" height=\"100%\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowfullscreen=\"true\" allow=\"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share\" allowFullScreen=\"true\"></iframe>', '08036234111', 'ahqcathedral@yahoo.com'),
(39, 'THE MIRACLE\r\nARENA', 'Several Ways to connect With Us.\r\nChoose One, Choose All.', '----', 'LIVE SERVICE', '<iframe src=\"https://web.facebook.com/plugins/video.php?href=https%3A%2F%2Fweb.facebook.com%2FAllSaintsAHQ%2Fvideos%2F902413427182299%2F&width=1280\" width=\"100%\" height=\"100%\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowfullscreen=\"true\" allow=\"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share\" allowFullScreen=\"true\"></iframe>', '08036234111', 'ahqcathedral@yahoo.com');

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
-- Indexes for table `payments`
--
ALTER TABLE `payments`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=107;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `dss`
--
ALTER TABLE `dss`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `editors`
--
ALTER TABLE `editors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `prayer`
--
ALTER TABLE `prayer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `random`
--
ALTER TABLE `random`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
