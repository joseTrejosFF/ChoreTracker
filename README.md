# Chore Tracker

This is a personal project that I made to keep track of how much time I spend doing chores at home.

**Live Demo:** [CLICK HERE](http://ec2-54-226-183-237.compute-1.amazonaws.com/)

## Screenshots

### Main section in dark mode

![Main section](https://raw.githubusercontent.com/jose-506/ChoreTracker/main/src/client/src/assets/allCardsDark.png)

### Charts in light mode

![Chart Section](https://raw.githubusercontent.com/jose-506/ChoreTracker/main/src/client/src/assets/chartLightMode1.png)

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
DATABASE_URL=mongodb://<user>:<password>@<connection_url>
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
| src/           | Contains the back-end and front-end source code                  |
| src/client/    | Contains the front-end files                                     |
| src/client/src | Contains the front-end source code                               |
| src/config/    | Contains the MongoDB connection and authentication-url           |
| src/models/    | Contains the MongoDB schema                                      |
| src/routes/    | Contains the http methods for CRUD operations                    |
| src/server.ts  | Entry point to the express app                                   |
| dist/          | Contains the output from the TypeScript build                    |
| node_modules   | Contains all the npm dependencies                                |
| package.json   | File that contains the npm dependencies as well as build scripts |
| tsconfig.json  | Config settings for compiling server code written in TypeScript  |

## License

Licensed under the [MIT](LICENSE.md) License.
