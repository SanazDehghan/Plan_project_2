import { user } from "../user/user.repository";
import { Plan } from "./model/plan";
import { PlanRepository, createplan, createprogram } from "./plan.repository";

export class planservice{

    private planRepo :PlanRepository;

    constructor(){
        this.planRepo = new PlanRepository;
    }
    public getPlans(){
        return this.planRepo.getPlans()
    }

    public createPlans(plan:createplan, user:user){
        // if conditions for user 
        if (user.role !== "Admin"){
            //throw Error("this user by this role can not create plan");
            return false
        }

        const createplan = this.planRepo.createplan(plan)
        return createplan
    }

/*     public addProgram(plan:Plan, program:createprogram, user:User){
        const today = new Date()

        //conditions
        if (user.role !== "Representative"){
            throw console.error("this user by this role can not create program");
        }

        if (plan.deadline< today){
            throw Error("time is over!!!")
        }

        const addprogram = this.planRepo.addProgram(plan, program)
        return addprogram
    } */


}