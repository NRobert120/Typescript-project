import { config } from "dotenv";
config({path:'.env.development'})

type env={
    PORT:number
}

export const{PORT}=process.env
