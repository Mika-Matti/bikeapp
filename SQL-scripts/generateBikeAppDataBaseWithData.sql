CREATE DATABASE IF NOT EXISTS bikeappDB;
USE bikeappDB;

CREATE TABLE IF NOT EXISTS `journeys` (
  `journey_id` int(11) NOT NULL AUTO_INCREMENT,
  `departure_time` date NOT NULL,
  `return_time` date NOT NULL,
  `departure_station_id` int(11) NOT NULL,
  `departure_station_name` varchar(500) NOT NULL DEFAULT '',
  `return_station_id` int(11) NOT NULL,
  `return_station_name` varchar(500) NOT NULL DEFAULT '',
  `journey_distance` int(11) DEFAULT NULL,
  `journey_duration` float DEFAULT NULL,
  KEY `departure_station_id` (`departure_station_id`),
  KEY `return_station_id` (`return_station_id`),
  KEY `journey_id` (`journey_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3305965 DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `stations` (
  `station_fid` int(11) NOT NULL,
  `station_id` int(11) NOT NULL,
  `station_nimi` varchar(500) NOT NULL,
  `station_namn` varchar(500) NOT NULL,
  `station_name` varchar(500) NOT NULL,
  `station_osoite` varchar(500) NOT NULL,
  `station_adress` varchar(500) NOT NULL,
  `station_kaupunki` varchar(500) DEFAULT NULL,
  `station_stad` varchar(500) DEFAULT NULL,
  `station_operator` varchar(500) DEFAULT NULL,
  `station_capacity` int(11) NOT NULL,
  `x` float NOT NULL,
  `y` float NOT NULL,
  PRIMARY KEY (`station_id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8;

LOAD DATA
INFILE 'Helsingin_ja_Espoon_kaupunkipyB6rA4asemat_avoin.csv'
INTO TABLE stations
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA INFILE '2021-05.csv'
INTO TABLE journeys
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(departure_time, return_time, departure_station_id,
departure_station_name, return_station_id, return_station_name,
@journey_distance, @journey_duration)
SET journey_distance = IF(@journey_distance='',0,@journey_distance), 
journey_duration = IF(@journey_duration='',0,@journey_duration);

LOAD DATA INFILE '2021-06.csv'
INTO TABLE journeys
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(departure_time, return_time, departure_station_id,
departure_station_name, return_station_id, return_station_name,
@journey_distance, @journey_duration)
SET journey_distance = IF(@journey_distance='',0,@journey_distance), 
journey_duration = IF(@journey_duration='',0,@journey_duration);

LOAD DATA INFILE '2021-07.csv'
INTO TABLE journeys
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(departure_time, return_time, departure_station_id,
departure_station_name, return_station_id, return_station_name,
@journey_distance, @journey_duration)
SET journey_distance = IF(@journey_distance='',0,@journey_distance), 
journey_duration = IF(@journey_duration='',0,@journey_duration);

DELETE FROM journeys
WHERE journey_distance < 10 
OR journey_duration < 10;

SET  @num := 0;
UPDATE journeys SET journey_id = @num := (@num+1);
ALTER TABLE journeys AUTO_INCREMENT =1;