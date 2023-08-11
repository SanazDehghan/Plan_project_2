import { Router } from "express";
import { loggedInUser } from "../modules/user/user.repository";
import { loginDto } from "../modules/user/dto/login.dto";
import { ZodError } from "zod";
export const app = Router()

const ourusers:loggedInUser = new loggedInUser;

app.post("/login",(req, res)=>{
    try{
        const dto = loginDto.parse(req.body);
    }catch (e){
        if ( e instanceof ZodError){
            res.status(400).send({message:e.errors})
        }
    }
/*     const {username, password} = req.body;
    const userId = ourusers.login(username, password);
    if(userId === undefined){
        throw Error("who are you?")
    }
    return userId */
})