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
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `cross_info`
--

INSERT INTO `cross_info` (`id`, `platform`, `cross_id`, `user_id`, `nickname`, `group_id`) VALUES
(0, 'fb', 'fb#1254', '546634', '', 0),
(1, 'line', 'line#8540', '842567', '', 0),
(2, 'fb', 'fb#8787', '863512', '', 0),
(4, 'fb', 'fb#0000', '854541', '', 0),
(5, 'fb', 'fb#0856', '854441', '', 0),
(6, 'line', 'line#0000', '123259', '', 0),
(7, 'line', 'line#0173', 'U1eb0066c63298492475422922712b3d6', '狂三', 1),
(8, 'line', 'line#0677', 'Uf47e2f70a05140630784283b31ab3d0d', '你好', 1),
(9, 'fb', 'fb#0540', '887927', '', 0),
(10, 'fb', 'fb#0467', '132592', '', 0),
(11, 'fb', 'fb#0302', '138822', '', 0),
(12, 'fb', 'fb#0734', '2039800242752214', '舒服', 1),
(24, 'fb', 'fb#0124', '2454676244606372', '屌傑', 1),
(25, 'line', 'line#0502', 'Uca5e9c75393d247bbf05887dffe749f8', '奶棋', 1),
(26, 'line', 'line#0475', 'Ub3ba83cd4e5575b65494fdc28f521cae', '鼻孔', 1);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'AUTO_INCREMENT', AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
