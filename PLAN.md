# PLAN

Refactor project to use ES6 Modules ✅
Set up DB using mongoose for MongoDB:✅

- Connection✅
- Schema✅
- Model✅

## USERS

POST✅
path is /api/users✅
Need to be able to create user✅
Return the username and _id as key/value pairs in an object (both strings)✅

GET
path is /api/users✅
Return an array of all users✅
Each user should be an object✅

## EXERCISE

POST
path is /api/users/:_id/exercises✅
Model is userId, description (string), duration (number), and optionally date (string). If no date is supplied, the current date will be used.✅
Respond with object containing those fields✅

## LOG

GET
path is /api/users/:_id/logs
Returns:
user object with an added count property containing number of exercises that belong to that user
Also contains a log property that contains an array of all exercises (each exercise is an object containing description, duration and date - use date string from Date API)
You can add from, to and limit parameters to a GET /api/users/:_id/logs request to retrieve part of the log of any user. from and to are dates in yyyy-mm-dd format. limit is an integer of how many logs to send back.
