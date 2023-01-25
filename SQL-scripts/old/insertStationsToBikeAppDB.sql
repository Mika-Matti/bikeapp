USE bikeappdb;

LOAD DATA
INFILE 'Helsingin_ja_Espoon_kaupunkipyB6rA4asemat_avoin.csv'
INTO TABLE stations
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;