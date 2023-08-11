import { Router } from "express";
import { planservice } from "../modules/plan/plan.service";
import { loggedInUser } from "../modules/user/user.repository";
import { createplanDTO } from "../modules/plan/dto/plan.dto";

export const app = Router()
const planService :planservice = new planservice;
const ourusers:loggedInUser = new loggedInUser
app.get("/",(req, res)=>{

    return res.status(200).send(planService.getPlans());
})

app.post("/create", (req, res)=>{
    const dto = createplanDTO.parse(req.body)
    const userId = req.headers['authorization']
    if (userId == undefined){
        throw Error("who is loggin?")
    }
    const user = ourusers.findUserById(userId)
    if (user == undefined){
        throw Error("can't find user by this id")
    }
    if (user.role !== "Admin"){
        throw Error("this role can not create plan")
    }
    const createplan = planService.createPlans({...dto, }, user)
    return res.status(200).send(createplan)
})

/* app.get("/getprogram", (req, res)=>{
    
}) */

/* app.post("/addprogram", (req, res)=>{
    const dataprogram = req.body.program;
    const user = req.body.userId;
    const plan = req.body.plan;
    const addProgram = planService.addProgram(plan,dataprogram,user)
    return addProgram
}) */