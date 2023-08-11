import { Express } from "express";
import { app as planRoute } from "./routes/plan.route";
import { app as userRoute } from "./routes/user.route";

const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.use("/plan", planRoute);
app.use(userRoute);

app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
})