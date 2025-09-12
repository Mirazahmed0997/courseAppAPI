import { model, Schema } from "mongoose";
import { userInterface } from "../interfaces/User.interface";


const userSchema = new Schema<userInterface>({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true,unique:[true, "Already have this email"],},
    password: {type: String, required: true}
},
{
    versionKey: false,
    timestamps:true
})

export const User= model <userInterface>('User', userSchema)