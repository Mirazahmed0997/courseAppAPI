import { model, Schema } from "mongoose";
import { userInterface } from "../interfaces/User.interface";
import  bcrypt  from 'bcryptjs';



const userSchema = new Schema<userInterface>({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true,unique:[true, "Already have this email"],},
    role: {type: String,enum: {values:['USER','ADMIN','SUPER ADMIN'], message:"Role is not Found"} , default:'USER',required:true,trim:true,uppercase:true},
    password: {type: String, required: true}
},
{
    versionKey: false,
    timestamps:true
})


userSchema.pre("save", async function (next) {
 console.log(this)
 this.password= await bcrypt.hash(this.password,10)
});


export const User= model <userInterface>('User', userSchema)