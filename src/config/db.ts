import { connect } from "mongoose";

const DATABASE_URL = process.env.DATABASE_URL || "";

export default async function connectDB(): Promise<void> {
  try {
    await connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("-- MongoDB is Connected.");
  } catch (err) {
    console.error("Error while trying to conect to the DB: ", err);
  }
}
