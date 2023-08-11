import { User } from "../user/model/user";
import { Plan } from "./model/plan";
import { Program } from "./program/model/program";

export interface createplan {
    title:String;
    description?:String;
    deadline:Date;
    program:Program[]
}

export class PlanRepository{
    private plans :Plan[] = []
    //
    public getPlans(){
        return this.plans;
    }
    // create plan
    public createplan(plan:createplan){
        const createplan = this.plans.push({...plan, id:this.plans.length+1 })
        return createplan
    }

    //find plan 
    public findPlanById(id:number){
        const findplan = this.plans.find((x)=>x.id==id)
        return findplan
    }



}