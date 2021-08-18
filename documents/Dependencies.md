# Dependencies
This page details what is installed in the production build of this application:

## Angular
- used to create the front end web application

## bcryptjs
- used to enable password hashing with salt and pepper for user authentication
- the regular bcrypt library is currently incompatible with elastic beanstalk, bcryptjs was used as a replacement

## cors
- enables cross-origin resource sharing for the back end

## db-migrate
- used to create or drop tables for the database

## dotenv 
- used to enable the usage of .env file for securing sensitive data

## express
- used to enable running a server on Node runtime

## jsonwebtoken
- used to enable token authroization 

## pg
- used to enable communication between node and a postgres database

