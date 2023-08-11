import { User,Role } from "./model/user";
import { v4 } from  "uuid";  
export interface user{
    username:String;
    password:String;
    role :Role;
}

export class loggedInUser{

    private Users:User[] =[
        {id:v4(),username:"admin", password:"admin", role:"Admin"},
        {id:v4(), username:"rep", password:"rep", role:"Representative"}
    ]
    public findUserById(id:String){
        return this.Users.find((x)=>x.id===id)
    }

    public getRoleOfUser(id:string){
        const user = this.findUserById(id);
        return user?.role
    }

    public login(username:string, password:string){
        const user = this.Users.find((x)=> x.username==username && x.password==password)
        return user?.id
    }
}