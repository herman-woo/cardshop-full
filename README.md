# Cardshop Full Stack Project
The goal and focus of this project was to use CircleCI to create CI/CL with AWS webservices and host a full stack application.

The Repo contains the CircleCi configuration, along with the repository for the back end and repository for the front end.
CircleCI will make use of both repos and the config file.

## Front End
This front end is created in Angular, and was used for the previous project.
It is deployed to S3 and hoested at this address:
http://hermanwoo-cardshop.s3-website.ca-central-1.amazonaws.com/

Currently it is only using a get request to the backend to get all the products.


## Back End
The back end is an Express server, written in TypeScript, and compiled to JavaScript. 
It is deployed to Elastic Beanstalk and can be reached via this link:
http://cardshopapi-env.eba-td8gqtne.us-east-1.elasticbeanstalk.com/ 


## Database
The database is hosted on RDS, and is being accessed by the backend.

## Documentation
In the documents folder of this repository, you can find screenshots that indicate the project being properly hosted on the AWS services, along with markdown documents to help further detail this project
1. Infrastructure - further details on the deployment of the project
2. Dependencies - further details on the libraries and modules used in the project
3. Pipeline - further details on the deployment procedure


## Next Steps
Though this project is fully hosted, it is not fully complete.
Next Steps for my project includes:
- Complete user login section (front-end)
- Create special pages where only user-type 'admins' can access
- Create angular components that allow admin users to create new products
- connect the front end cart functionality with the back-end to enable persistent data
- Create user sign-in, and user profile page. 