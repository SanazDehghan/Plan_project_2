import { Plan } from "../model/plan"
import { Program } from "./model/program";

export interface createprogram{
    id:number;
    title:string;
    description:string;
    userId:string;
}

export class ProgramRepository{

    private programs: Program[] =[]
    
    //add program 
    public addProgram(plan:Plan, program:createprogram){
        const newprogram = plan.program.push({...program, planId:plan.id})
        return newprogram
    }
}