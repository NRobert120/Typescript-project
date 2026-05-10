import express from "express";
import { PORT } from "./config/env.config";
import type { Request,Response } from "express";

const app=express()

app.use(express.json())

app.get('/',async(req:Request,res:Response):Promise<void>=>{
    res.send("hello world");
})

app.listen(PORT,()=>{
    console.log(`the app is running and listening of port ${PORT}`)
})
