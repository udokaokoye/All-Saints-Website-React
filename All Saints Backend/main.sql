-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 21, 2020 at 10:16 AM
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

--
-- Dumping data for table `chat`
--

INSERT INTO `chat` (`id`, `user`, `message`, `likes`, `created_at`) VALUES
(120, 'Okoye Udoka', 'Good Morning', '', '2020-12-20 16:01:30');

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
(15, 'hghf', 'fghfg', 'ghfgh', 'ghfgh', 'ghfg', '2020-12-09 16:48:42');

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
(32, 'MID-WEEK SERVICE', '2020-12-23', '18:00');

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
(7, 'fsdds', 'leviokoye@gmail.com', 'sdf', 'Tithe', '500', '248581935', '2020-12-04 20:23:37'),
(8, 'Okoye Udoka', 'leviokoye@gmail.com', '09023632053', 'General Thanksgiving', '500', '582460563', '2020-12-08 02:39:54'),
(9, 'Okoye Udoka', 'leviokoye@gmail.com', '09023632053', 'General Thanksgiving', '500', '357327867', '2020-12-08 02:40:51'),
(10, 'kjhkhk', 'leviokoye@gmail.com', '09023632053', 'General Thanksgiving', '200', '217318135', '2020-12-08 02:42:06'),
(11, 'khjkhjk', 'levikoye@gmail.com', '20200', 'General Thanksgiving', '522', '226792966', '2020-12-08 02:42:54'),
(12, 'ertertert', 'leviokoye@gmail.com', '09023632053', 'General Thanksgiving', '200', '10535718', '2020-12-08 02:44:47'),
(13, 'dfsds', 'leviokoye@gmail.com', '09023632053', 'General Thanksgiving', '800', '833278713', '2020-12-08 02:50:42'),
(14, 'ertertert', 'leviokoye@gmail.com', '09023632053', 'General Thanksgiving', '300', '803590820', '2020-12-08 02:52:43'),
(15, 'ghfghfg', 'leviokoye@gmail.com', '09023632053', 'General Thanksgiving', '200', '223827964', '2020-12-08 02:53:47'),
(16, 'ertertert', 'leviokoye@gmail.com', '09023632053', 'General Thanksgiving', '200', '830236046', '2020-12-08 02:55:39'),
(17, 'ertertert', 'leviokoye@gmail.com', '09023632053', 'General Thanksgiving', '1000', '16141747', '2020-12-08 03:16:35'),
(18, 'Okoye Udoka', 'leviokoye@gmail.com', '09023632053', 'General Thanksgiving', '5000', '510641957', '2020-12-08 03:45:35'),
(19, 'Chukwugbo Praise', 'leviokoye@gmail.com', '090236320533', 'General Thanksgiving', '1000', '679000958', '2020-12-09 00:45:51'),
(20, 'Okoye Udoka', 'leviokoye@gmail.com', '09023632053', '', '5000', '412317790', '2020-12-09 00:59:10'),
(21, 'Okoye Udochukwuka Levi', 'okoyeudoka53@mail.com', '09023632053', 'For the blessings Of God On My Life', '6000', '360141684', '2020-12-09 01:01:17'),
(22, '7888', 'leviokoye@gmail.com', '7888', 'General Thanksgiving', '1000', '649156665', '2020-12-20 15:44:44');

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
  `live_img_width` text NOT NULL,
  `live_txt` text NOT NULL,
  `live_service` text NOT NULL,
  `cnt_phone` text NOT NULL,
  `cnt_email` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `random`
--

INSERT INTO `random` (`id`, `showcase_text`, `banner_txt`, `live_img`, `live_img_width`, `live_txt`, `live_service`, `cnt_phone`, `cnt_email`) VALUES
(58, 'THE MIRACLE\r\nARENA', 'Several Ways to connect With Us.\r\nChoose One, Choose All.', 'http://192.168.1.112/All Saints Backend/Images/live2.png', '100', 'LIVE SERVICE', '<iframe src=\"https://web.facebook.com/plugins/video.php?href=https%3A%2F%2Fweb.facebook.com%2FAllSaintsAHQ%2Fvideos%2F383476709403288%2F&width=1280\" width=\"100%\" height=\"100%\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowfullscreen=\"true\" allow=\"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share\" allowFullScreen=\"true\"></iframe>', '08036234111', 'ahqcathedral@yahoo.com'),
(59, 'THE MIRACLE\r\nARENA', 'Several Ways to connect With Us.\r\nChoose One, Choose All.', 'http://192.168.1.112/All Saints Backend/Images/live2.png', '100', 'LIVE SERVICE', '<iframe src=\"https://web.facebook.com/plugins/video.php?href=https%3A%2F%2Fweb.facebook.com%2FAllSaintsAHQ%2Fvideos%2F383476709403288%2F&width=1280\" width=\"100%\" height=\"100%\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowfullscreen=\"false\" allow=\"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share\" allowFullScreen=\"false\"></iframe>', '08036234111', 'ahqcathedral@yahoo.com'),
(60, 'THE MIRACLE\r\nARENA', 'Several Ways to connect With Us.\r\nChoose One, Choose All.', 'http://192.168.1.112/All Saints Backend/Images/live2.png', '100', 'LIVE SERVICE', '<iframe src=\"https://web.facebook.com/plugins/video.php?href=https%3A%2F%2Fweb.facebook.com%2FAllSaintsAHQ%2Fvideos%2F383476709403288%2F&width=1280\" width=\"100%\" height=\"100%\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowfullscreen=\"no\" allow=\"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share\" allowFullScreen=\"no\"></iframe>', '08036234111', 'ahqcathedral@yahoo.com'),
(61, 'THE MIRACLE\r\nARENA', 'Several Ways to connect With Us.\r\nChoose One, Choose All.', 'http://192.168.1.112/All Saints Backend/Images/live2.png', '100', 'LIVE SERVICE', '<iframe src=\"https://web.facebook.com/plugins/video.php?href=https%3A%2F%2Fweb.facebook.com%2FAllSaintsAHQ%2Fvideos%2F383476709403288%2F&width=1280\" width=\"100%\" height=\"100%\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allow=\"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share\"></iframe>', '08036234111', 'ahqcathedral@yahoo.com'),
(62, 'THE MIRACLE\r\nARENA', 'Several Ways to connect With Us.\r\nChoose One, Choose All.', 'http://192.168.1.112/All Saints Backend/Images/live2.png', '100', 'LIVE SERVICE', '<iframe src=\"https://web.facebook.com/plugins/video.php?href=https%3A%2F%2Fweb.facebook.com%2FAllSaintsAHQ%2Fvideos%2F383476709403288%2F&width=1280\" width=\"100%\" height=\"100%\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowFullScreen=\"true\" allow=\"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share\"></iframe>', '08036234111', 'ahqcathedral@yahoo.com'),
(63, 'THE MIRACLE\r\nARENA', 'Several Ways to connect With Us.\r\nChoose One, Choose All.', 'http://192.168.1.112/All Saints Backend/Images/live2.png', '100', 'LIVE SERVICE', '<iframe src=\"https://web.facebook.com/plugins/video.php?href=https%3A%2F%2Fweb.facebook.com%2FAllSaintsAHQ%2Fvideos%2F383476709403288%2F&width=1280\" width=\"100%\" height=\"100%\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\"  allow=\"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share\" allowFullScreen=\"true\"></iframe>', '08036234111', 'ahqcathedral@yahoo.com'),
(64, 'THE MIRACLE\r\nARENA', 'Several Ways to connect With Us.\r\nChoose One, Choose All.', 'http://192.168.1.112/All Saints Backend/Images/live2.png', '100', 'LIVE SERVICE', '<iframe src=\"https://web.facebook.com/plugins/video.php?href=https%3A%2F%2Fweb.facebook.com%2FAllSaintsAHQ%2Fvideos%2F383476709403288%2F&width=1280\" width=\"100%\" height=\"100%\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\"  allow=\"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share\" ></iframe>', '08036234111', 'ahqcathedral@yahoo.com'),
(65, 'THE MIRACLE\r\nARENA', 'Several Ways to connect With Us.\r\nChoose One, Choose All.', 'http://192.168.1.112/All Saints Backend/Images/live2.png', '100', 'LIVE SERVICE', '<iframe src=\"https://web.facebook.com/plugins/video.php?href=https%3A%2F%2Fweb.facebook.com%2FAllSaintsAHQ%2Fvideos%2F2802737656711270%2F&width=1280\" width=\"100%\" height=\"100%\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allow=\"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share\" ></iframe>', '08036234111', 'ahqcathedral@yahoo.com'),
(66, 'dsfsgsfdg', 'Several Ways to connect With Us.\r\nChoose One, Choose All.', 'http://192.168.1.112/All Saints Backend/Images/live2.png', '100', 'LIVE SERVICE', '<iframe src=\"https://web.facebook.com/plugins/video.php?href=https%3A%2F%2Fweb.facebook.com%2FAllSaintsAHQ%2Fvideos%2F2802737656711270%2F&width=1280\" width=\"100%\" height=\"100%\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allow=\"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share\" ></iframe>', '08036234111', 'ahqcathedral@yahoo.com'),
(67, 'THE MIRACLE\nARENA', 'Several Ways to connect With Us.\r\nChoose One, Choose All.', 'http://192.168.1.112/All Saints Backend/Images/live2.png', '100', 'LIVE SERVICE', '<iframe src=\"https://web.facebook.com/plugins/video.php?href=https%3A%2F%2Fweb.facebook.com%2FAllSaintsAHQ%2Fvideos%2F2802737656711270%2F&width=1280\" width=\"100%\" height=\"100%\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allow=\"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share\" ></iframe>', '08036234111', 'ahqcathedral@yahoo.com');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=124;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `prayer`
--
ALTER TABLE `prayer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `random`
--
ALTER TABLE `random`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
