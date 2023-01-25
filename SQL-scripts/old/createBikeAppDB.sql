CREATE DATABASE IF NOT EXISTS bikeappDB;
USE bikeappDB;

CREATE TABLE stations
(
  station_fid INT NOT NULL,
  station_id INT NOT NULL,
  station_nimi VARCHAR(500) NOT NULL,
  station_namn VARCHAR(500) NOT NULL,
  station_name VARCHAR(500) NOT NULL,
  station_osoite VARCHAR(500) NOT NULL,
  station_adress VARCHAR(500) NOT NULL,
  station_kaupunki VARCHAR(500),
  station_stad VARCHAR(500),
  station_operator VARCHAR(500),
  station_capacity INT NOT NULL,
  x FLOAT NOT NULL,
  y FLOAT NOT NULL,
  PRIMARY KEY (station_id)
);

CREATE TABLE journeys
(
  journey_id INT NOT NULL AUTO_INCREMENT,
  departure_time DATE NOT NULL,
  return_time DATE NOT NULL,
  journey_distance INT NOT NULL,
  journey_duration FLOAT NOT NULL,
  departure_station_id INT NOT NULL,
  return_station_id INT NOT NULL,
  PRIMARY KEY (journey_id),
  FOREIGN KEY (departure_station_id) REFERENCES stations(station_id),
  FOREIGN KEY (return_station_id) REFERENCES stations(station_id)
);