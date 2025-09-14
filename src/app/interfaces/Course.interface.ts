import { Types } from "mongoose";


export interface coursesInterface{
    title:String,
    description:String,
    price:Number,
    instructor:String,
    user:Types.ObjectId;
    createdAt?: Date; // timestamps add this automatically
    updatedAt?: Date; // timestamps add this automatically
}