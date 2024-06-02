'use server'

import * as z from "zod"
import bcrypt from "bcryptjs"

import { SignupSchema } from "@/schema"
import { db } from "@/lib/db"
import { getUserByEmail } from "@/data/user"

export const signup = async(values: z.infer<typeof SignupSchema>) =>{
    const validateFields = SignupSchema.safeParse(values)

    if(!validateFields.success) {
        return{
            error: "Invalid fields...!"
        }
    }

    const {
        name,
        email, 
        password
    } = validateFields.data

    const hashPassword = await bcrypt.hash(password, 10)

    const isEmailExist = await getUserByEmail(email)

    if(isEmailExist){
        return{
            error: "Email already taken..!"
        }
    }

    await db.user.create({
        data:{
            name,
            email,
            password: hashPassword
        }
    })


    return {
        success: "Account created..!"
    }
}