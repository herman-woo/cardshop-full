# Pipeline
This page details the workflow of the pipeline.

1. Preparation Stage:
- CircleCI will prepare the environment, install node js, and setup all the required CLIs.
- The ClIs required are:
    - aws-cli
    - eb

2. Application Installation Stage:
- CircleCi will run the frontend:install and backend:install scripts
    - These Scripts tell the application and API repos to install their NPM dependencies.
    - Angular-CLI and TypeScript are also installed at this stage.

3. Application Build Stage:
- CircleCI will run the frontend:build and backend:build scripts
    - The front end application will run `ng build` and a build of the angular application will be created under the /dist folder
    - The backend will run `npx tsx` will compiles TypeScript and outputs into the /build folder.

4. Application Deployment Stage:
- CircleCI will run the frontend:deploy and backend:deploy scripts
    - The frontend will run a script in the aws cli to deploy the /dist folder to the approriate s3 bucket, designated in the [bin/deploy.sh] file.
    - the backend will run `eb deploy` through the elastic beanstalk cli and deploy the build to the designated environment in the [elasticbeanstalk/config.yml] file.

