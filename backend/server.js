import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { app,server } from './socket/socket.js';

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import connectToMongodb from './db/connectToMongodb.js';


dotenv.config();

const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

server.listen(PORT, () => {
    connectToMongodb()
    console.log(`server is listening to port: ${PORT}`);
});