
export type Role= "Admin" |"Representative" | "Customer";

export interface User {
    id:string;
    username:String;
    password:String;
    role :Role;
}

