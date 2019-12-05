-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 
-- 伺服器版本： 10.4.6-MariaDB
-- PHP 版本： 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `cross_platform`
--

-- --------------------------------------------------------

--
-- 資料表結構 `cross_info`
--

CREATE TABLE `cross_info` (
  `id` int(11) NOT NULL COMMENT 'AUTO_INCREMENT',
  `platform` text NOT NULL,
  `cross_id` text NOT NULL,
  `user_id` text NOT NULL,
  `nickname` text NOT NULL,
  `group_name` text NOT NULL,
  `friend` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `cross_info`
--

INSERT INTO `cross_info` (`id`, `platform`, `cross_id`, `user_id`, `nickname`, `group_name`, `friend`) VALUES
(38, 'line', '', 'Uf47e2f70a05140630784283b31ab3d0d', '明哲', 'Neko,是在哈囉？', '明哲OuO,明哲'),
(39, 'fb', '', '2039800242752214', '明哲OuO', 'Neko', '明哲');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `cross_info`
--
ALTER TABLE `cross_info`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_3` (`id`),
  ADD KEY `id` (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `cross_info`
--
ALTER TABLE `cross_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'AUTO_INCREMENT', AUTO_INCREMENT=40;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
