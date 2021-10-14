# Chore Tracker

This is a personal project that I made to keep track of how much time is spend doing chores at home.

**Live Demo:** [CLICK HERE](http://ec2-54-226-183-237.compute-1.amazonaws.com/)

## Screenshots

**Main section in dark mode**
![Main section](LINK)

**Charts in light mode**
![Chart Section](LINK)

## Getting started

- Clone the repository

```
git clone https://github.com/jose-506/ChoreTracker.git
```

- Install dependencies

```
cd ChoreTracker/
npm install
cd src/client/
npm install
```

- Set a DATABASE_URL (MongoDB Atlas connection string) on .env.

```
DATABASE_URL=mongodb+srv://<username>:<password@clusterName/databasename...
```

- Start the back-end and front-end

```
cd ChoreTracker/
npm run dev
npm run client
```

## Web Stack - MERN

- MongoDB as the document database.
- Express as the web framework.
- React as the client-side.
- Node as the webserver.

## Project Structure

| Name           | Description                                                      |
| -------------- | ---------------------------------------------------------------- |
| scr/           | Contains back-end and front-end source code                      |
| scr/client/    | Contains the front-end files                                     |
| scr/client/src | Contains the front-end source code                               |
| scr/config/    | Contains the MongoDB connection and authentication-url           |
| scr/models/    | Contains the MongoDB schema                                      |
| scr/routes/    | Contains the http methods for CRUD operations                    |
| scr/server.ts  | Entry point to the express app                                   |
| dist/          | Contains the output from the TypeScript build                    |
| node_modules   | Contains all the npm dependencies                                |
| package.json   | File that contains the npm dependencies as well as build scripts |
| tsconfig.json  | Config settings for compiling server code written in TypeScript  |

## License

Licensed under the [MIT](LICENSE) License.
