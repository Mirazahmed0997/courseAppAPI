import { model, Schema } from "mongoose";
import { required } from "zod/mini";
import { coursesInterface } from "../interfaces/Course.interface";


const courseSchema = new Schema<coursesInterface>({
    title:{type: String, required:true},
    description:{type:String, required:true},
    price: {type:Number,required:true},
    instructor:{type:String,required:true},
    user:      {type:Schema.Types.ObjectId,ref: "User",required:true}
},
{
    versionKey: false,
    timestamps:true
})

export const Course= model('Course',courseSchema)




