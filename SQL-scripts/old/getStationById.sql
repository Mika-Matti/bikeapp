 SELECT stations.station_fid, stations.station_nimi, stations.station_osoite,
 (SELECT COUNT(*) FROM journeys WHERE journeys.departure_station_id = stations.station_id) AS departed,
 (SELECT COUNT(*) FROM journeys WHERE journeys.return_station_id = stations.station_id) AS returned
 FROM stations ORDER BY stations.station_fid LIMIT 1, 25;