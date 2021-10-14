import express from "express";
import connectDB from "./config/db";

console.log("process.env.PORT: ", process.env.PORT);

const app = express();
const PORT = process.env.PORT || 3333;

// DB connection
connectDB();

app.use("/api/chores", require("./routes/chores"));

app.listen(PORT, () => console.log(`-- Server Running on port: ${PORT}`));
