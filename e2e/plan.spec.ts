import { planservice } from "../src/modules/plan/plan.service"

describe("plan", ()=>{
    const plans = new planservice;

    describe("create", ()=>{
        it("should be pass", ()=>{
            expect(plans.createPlans({title:"test", description:" not important", deadline:new Date},
            {username:"number1", password:"number2", role:"Representative"})
        ).toBe(false)
        })
    })
})