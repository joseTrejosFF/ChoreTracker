import express, { Request, Response } from "express";
import connectDB from "./config/db";

const app = express();

// DB connection
connectDB();

app.use("/api/chores", require("./routes/chores"));

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`-- Server Running on port: ${PORT}`));
