import { Request } from "supertest"
//import { app } from "../src/api"
import { userService } from "../src/modules/user/user.service";

describe("login user", ()=>{
    const testUser = new userService;
    describe("test correct login for user",()=>{
        it("should pass from username admin password admin", ()=>{
            expect(testUser.loginUser("rep","rep")).toBe(true)
        })
    }),

    describe("test wrong login for user",()=>{
        it("should pass from username admin password admin", ()=>{
            expect(testUser.loginUser("rep","21")).toBe(false)
        })
    })
});
/* describe("identify role", ()) */