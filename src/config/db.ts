import { connect } from 'mongoose';

/**
 * @todo move it to env.variable file
 */

const db =
  'mongodb+srv://mau789:mau789@cluster0.mf0db.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

export default async function connectDB(): Promise<void> {
  
  try {
    await connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('-- MongoDB is Connected.');
  } catch (err) {
    console.error(err.message);
  }
};
