# Neighborhood Handyman

## Table of Contents
- [Project Overview](#project-overview) 
- [Contributors](#contributors)
- [Live Application](#live-application)
- [Installation](#installation)
- [License](#license)
- [Screenshots](#screenshots)

## Project Overview
Full stack application for users to post home improvement projects and accepting proposals as well as submitting proposals for different users' projects. Built using MERN stack: React front end, MongoDB database, and Node.js/Express.js server and GraphQL API with Mongoose ODM. User authentication is achieved using the JSON Web Token library along with Apollo Server for managing context within the application.

[View the live application](https://neighborhood-handyman.herokuapp.com/) in Heroku.

### Languages Used
- JavaScript (React)
- MongoDB
- HTML
- CSS

### Node Libraries Used
- [Apollo Server](https://www.npmjs.com/package/apollo-server-express)
- [Express](https://www.npmjs.com/package/express)
- [JSON Web Token](https://www.npmjs.com/package/jsonwebtoken)
- [GraphQL](https://www.npmjs.com/package/graphql)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [React](https://www.npmjs.com/package/react)
- [React Bootstrap](https://www.npmjs.com/package/react-bootstrap)

See [server package.json](./server/package.json) and [client package.json](./client/package.json) for full list of dependencies.

### Additional Libraries
- [Bootstrap](https://www.npmjs.com/package/bootstrap)
- [Font Awesome](https://fontawesome.com)

## Contributors
- Sebastian Fave ([sfave](https://github.com/spfave))
- Elizabeth De Santis ([desantel](https://github.com/desantel))
- Stephanie Davis ([whatawhat](https://github.com/whatawhat))
- Stephen Roddewig ([Captain63](https://github.com/Captain63))

## Live Application
[View application deployment](https://neighborhood-handyman.herokuapp.com/) in Heroku.

## Installation
To run this application on your local machine, Node.js is _required_. Once cloned/downloaded from GitHub, enter ```npm i``` in command line to install the packages referenced under Libraries Used automatically. 
You are now be ready to launch the application by entering ```npm run dev```.

## License
Permission is hereby granted, free of charge, to any person obtaining a copy of this Software and associated documentation files (the "Software"), to deal in the Software without  restriction, including without limitation the rights to use, copy, modify, merge, publish distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions.

[View the full license](./LICENSE)

## Screenshots
Create Your Account Page
![Signup page](assets/screenshots/signup.png)

My Account
![My Account page](assets/screenshots/account.png)

Dashboard
![Dashboard page](assets/screenshots/dashboard.png)

Create a New Job
![Create a new job page](assets/screenshots/createNewJob.png)

Job Listings Page
![Job Listing page](assets/screenshots/joblistings.png)

Proposals
![Proposals page](assets/screenshots/proposals.png)

User Proposals
![User Proposals page](assets/screenshots/userProposal.png)