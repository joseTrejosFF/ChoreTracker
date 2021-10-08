import express, { Request, Response } from 'express';
import connectDB from './config/db';

const app = express();

// DB connection
connectDB();

app.get('/', (req:Request, res:Response):void => {
  res.send('Working...');
});

// Mount Routes on app
app.use('/api/chores', require('./routes/chores'));

const PORT = 3333;

app.listen(PORT, () => console.log(`-- Server Running on port: ${PORT}`));

