# Infrastrcuture 
This page details the infrastructure used in this project

## Amazon Web Services - Simple Storage Service (S3)
S3 is used to host the front-end Angular application of this project.
A bucket was create to contain the build files, and the bucket is set to Public Access.

The application uses HTTP get request to the back end.

## Amazon Web Services - Elastic Beanstalk (EB)
EB is used to host the back-end express server. The environemtn is running Node v14 on 64bit.
The server takes requests from the front end and sends SQL to the database to retrieve data. The data will be returned as JSON to the front end. 

## Amazon Web Services - Relational Database Service (RDS)
RDS is used to host the PostgreSQL database. 
The server can CREATE, READ, UPDATE and DELETE information from the database.

## CircleCI
Circleci is the main application that runs the pipeline. Further information about the pipeline can be found in the Pipeline.md document in /Documents folder.

## Github
Github hosts the repository for this project.
The main link to the repo is here: 
https://github.com/herman-woo/cardshop-full

Whenever a commit is made to this repo, CircleCI will run the pipeline and update the production environment