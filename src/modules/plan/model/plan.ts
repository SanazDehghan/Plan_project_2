import { Program } from "../../plan/program/model/program";
import {User} from "../../user/model/user"


export interface Plan {
    id:number;
    title:String;
    description?:String;
    deadline:Date;
}

