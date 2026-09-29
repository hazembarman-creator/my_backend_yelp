# Welcome to My Backend Yelp
***

## Task
Deploy a pre-built ReactJS application (a Yelp-style restaurant listing app) to the cloud with authentication. The app uses GraphQL to communicate with its backend, and needed to be hosted publicly at zero cost.

## Description
The app was connected to an AWS Cognito user pool for authentication, an AWS AppSync GraphQL API for data operations, and a DynamoDB table to persist restaurant data. The React frontend was then built for production and deployed as a static site using AWS Amplify Hosting, via a manual zip upload (Amplify Console's Git-less deploy flow), since Amplify Gen 1 CLI backend initialization was unavailable on the account. The app supports full CRUD end-to-end: users authenticate via Cognito, then create and view restaurant entries stored in DynamoDB through AppSync.

## Installation
\`\`\`
npm install
\`\`\`

## Usage
\`\`\`
npm start
\`\`\`
Open the app, sign in (or create an account) via the Cognito login screen, then add a restaurant using the Name/Description/City fields. Submitted restaurants appear in the table below, fetched live from DynamoDB via AppSync.

Live deployed version: https://staging.d1aj267camqgv6.amplifyapp.com

### The Core Team
<span><i>Made at <a href='https://qwasar.io'>Qwasar SV -- Software Engineering School</a></i></span> <span><img alt='Qwasar SV -- Software Engineering School's Logo' src='https://storage.googleapis.com/qwasar-public/qwasar-logo_50x50.png' width='20px' /></span>