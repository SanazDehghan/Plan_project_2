import { Plan } from "../model/plan";
import { ProgramRepository, createprogram } from "./program.repository";
import { user } from "../../user/user.repository";

export class ProgramService{

    private programRepo: ProgramRepository = new ProgramRepository;
    
    public addProgram(plan:Plan, program:createprogram, user:user){
        const today = new Date()

        //conditions
        if (user.role !== "Representative"){
            throw console.error("this user by this role can not create program");
        }

        if (plan.deadline< today){
            throw Error("time is over!!!")
        }

        const addprogram = this.programRepo.addProgram(plan, program)
        return addprogram
    } 
}