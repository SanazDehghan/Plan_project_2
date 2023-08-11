import { loggedInUser } from "./user.repository";




export class userService{

    private userService :loggedInUser;

    constructor(){
        this.userService = new loggedInUser;
    }
    
    public loginUser(username:string, password:string){
        const userId=this.userService.login(username, password)
        console.log(userId)
        if (userId === undefined){
            return false;
            
        }
        return true
    }
}