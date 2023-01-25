USE bikeappdb;

TRUNCATE TABLE journeys;

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