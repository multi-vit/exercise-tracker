# Exercise Tracker

Completed as part of freeCodeCamp's Backend and API certification.

## Things I have learnt

- Solidified learning of Mongoose for MongoDB
- Use of multiple schema
- Chaining queries in Mongoose
- Use of .gt()/.lt() (from/to) when searching dates, limit() to restrict number of results and search() to restrict fields returned in Mongoose
- Writing scripts that will remove all documents from the collection
- Use of logical OR operator to set default values for req.query keys if they don't exist

## Installation

To install this repository on your local machine, fork or clone the repository from GitHub. To do this, you can run:

```javascript
git clone https://github.com/multi-vit/exercise-tracker.git
```

Or to fork, you can press the 'fork' button on this page, and follow the on-screen instructions.

Once you have access to this repository on your local machine, change directory into the right folder:

```javascript
cd exercise-tracker
```

Once you are inside this directory, run:

```javascript
npm i
```

This will install all the necessary dependencies.

We are using ES6 import and export syntax.

## Setting Up Your Environment

After you have installed the project on your local machine, you will want to set up the necessary environment variables to connect the project to your Mongo database.

To do this, create a `.env` file at the root level of the folder. Save the following database credentials inside of the `.env` file:

```javascript
MONGO_URI=<your DB_URI>
```

## Scripts and Commands

To run the back-end on localhost, run:

```javascript
npm start
```

Or to use nodemon to automatically restart on file change:

```javascript
npm run dev
```

To clear all documents from the User collection, run:

```javascript
npm run resetUsers
```

To clear all documents from the Exercise collection, run:

```javascript
npm run resetExercises
```

## Using the microservice

To use the basic user interface, run the start script and visit `http://localhost:3000` which will serve the html file from the views folder. 

To create a new user, enter the desired username in the Fill in the input box and click the `Submit` button, which will make a POST request to `/api/users` with the username from the input box. You will receive a response confirming the username along with a unique ID that should be noted down for future use.

You can also simulate this behaviour by making a POST request directly to `http://localhost:3000/api/users` using Postman or similar.

If you forget your ID, you can make a GET request to `http://localhost:3000/api/users` to receive an array of all users in the database.

To add an exercise, enter the user ID, description and duration (in minutes) of the exercise. You can optionally enter a date in YYYY-MM-DD format or leave it blank to use the current date. This will make a POST request to `/api/users/:_id/exercises`, where `:_id` is the user ID as described above, with the above details and you will receive a response confirming if this was successful. 

You can also simulate this behaviour by making a POST request directly to `http://localhost:3000/api/users/:_id/exercises` using Postman or similar.

To see a complete log of exercises a user has undertaken, you can make a GET request to `/api/users/:_id/logs`, where `:_id` is the user ID as described above, to receive a response containing the username, count of exercises and a log containing an array of all exercises undertaken, each array item detailing its date, description and duration. 
