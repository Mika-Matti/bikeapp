BikeApp-Project

Made with React.js, node.js and mySQL.

Setup:

1. create and import mySQL database by running the script generateBikeAppDataBaseWithImportedData.SQL from
SQL-scripts folder found in the root folder of the bikeapp project.

2. In root folder, navigate to server -> src -> and edit router.js by changing the credentials to connect to database.

Running the app:

1. Open server folder in terminal and start the server by typing node server.js. Be sure to install node modules first by running
npm install, if you haven't already.

2. Open client folder in another terminal and either run the client with npm start or use the deployed build with command serve -s build.

<<<<<<< HEAD
3. If everything is up and running, you may now test the application in localhost:3000.

ABOUT THE PROJECT:

Project is based on exercise https://github.com/solita/dev-academy-2023-exercise

My project implements the following functionalities:

1. Data import
 - Import data from the CSV files to a database
 - Validate data before importing (Empty distance/duration columns are replaced with 0)
 - Dont import journeys that lasted for less than ten seconds
 - Dont import journeys that covered distances shorter than 10 meters
2. Journey list view
 - List journeys. 
 - Journeys are displayed 25 rows at a time per page.
 - For each journey show departure and return stations, covered distance in kilometers and duration in minutes
3. Station list
 - List all the stations with 25 rows per page
 - Have a button at the end of the row to open single station view
 - Display station name, address, journeys starting from the station and journeys ending at the station in rows
4. Single station view
 - Display station name, address, journeys starting from the station and journeys ending at the station.
=======
3. If everything is up and running, you may now test the application in localhost:3000.
>>>>>>> parent of 7714599... Create new shorter script to generate database with .csv files
