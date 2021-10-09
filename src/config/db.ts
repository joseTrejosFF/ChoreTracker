import { connect } from "mongoose";

const DB =
  process.env.DATABASE_URL ||
  "mongodb+srv://mau789:wgXvdGYrkejFMNFt@cluster0.mf0db.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

export default async function connectDB(): Promise<void> {
  try {
    await connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("-- MongoDB is Connected.");
  } catch (err) {
    console.error("Error while trying to conect to the DB: ", err);
  }
}
