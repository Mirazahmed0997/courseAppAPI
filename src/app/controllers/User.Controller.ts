
import express, { Request, Response } from 'express'
import z from 'zod';
import { create } from './../../../node_modules/@types/whatwg-url/lib/URLSearchParams.d';
import { User } from '../models/User.model';

export const userRoutes= express.Router()

export const createUserZodSchema = z.object({
  firstName: z
    .string()
    .min(4, { message: "First name must be at least 4 characters long" })
    .max(10, { message: "First name must be at most 10 characters long" })
    .trim(),
    
  lastName: z
    .string()
    .min(4, { message: "Last name must be at least 4 characters long" })
    .max(10, { message: "Last name must be at most 10 characters long" })
    .trim(),
    
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .trim()
    .toLowerCase(),
    
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .trim(),
    
  role: z.enum(["USER", "ADMIN", "SUPER ADMIN"])
    .default("USER")
    .optional(),

});


userRoutes.post('/create',async(req: Request, res: Response)=>
{
    try {
        const body= await createUserZodSchema.parseAsync(req.body)
        const user = await User.create(body)

        res.status(201).json({
            success: true,
            message: "User successfully created",
            user
        })

    } catch (error) {
        console.log(error)
    }
})