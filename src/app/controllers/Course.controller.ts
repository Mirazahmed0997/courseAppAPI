import express, { Request, Response } from 'express'
import { Course } from '../models/Course.model';



export const courseRoutes= express.Router()

courseRoutes.post('/create', async (req:Request,res:Response)=>
{
    try {
            const body= req.body;
    const course=await Course.create(body)

    res.status(201).json({
        status:true,
        message: " course successfully created",
        course
    })
    } catch (error) {
      console.log(error)  
    }
})


courseRoutes.get('/',async (req:Request,res:Response)=>
{
   try {
     const courses=  await Course.find().populate('user')
    res.status(201).json({
        status:true,
        message: "All courses",
        courses
    })
   } catch (error) {
    console.log(error)
   }
})


courseRoutes.get('/:id',async (req:Request,res:Response)=>
{
   try {
    const param= req.params.id
     const course=  await Course.findById(param).populate('user')
    res.status(201).json({
        status:true,
        message: "Single course",
        course
    })
   } catch (error) {
    console.log(error)
   }
})


courseRoutes.patch('/update/:id',async (req:Request,res:Response)=>
{
   try {
    const updatedData= req.body
    const param= req.params.id
     const updatedCourse=  await Course.findByIdAndUpdate(param,updatedData,{new:true}).populate('user')
    res.status(201).json({
        status:true,
        message: "Single course",
        updatedCourse
    })
   } catch (error) {
    console.log(error)
   }
})

courseRoutes.delete('/delete/:id',async (req:Request,res:Response)=>
{
    try {
        const id=req.params.id;
    const deletedData= await Course.findByIdAndDelete(id)

    res.status(201).json({
        status:true,
        message: "Course successfully deleted",
        deletedData
    })
    } catch (error) {
        console.log(error)
    }
})


