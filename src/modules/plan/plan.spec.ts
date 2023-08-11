import { planservice } from "../plan/plan.service"

describe("create plan", ()=>{
    const plans = new planservice
    it("should not create program if user is not admin", ()=>{
        expect (
            plans.createPlans({title:"test", description:" not important", deadline:new Date, program:[]},
            {username:"number1", password:"number2", role:"Representative"})
        ).toBe(false)
    })
})