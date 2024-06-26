'use server'

import { signIn } from "@/auth"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"
import { SigninSchema } from "@/schema"
import { AuthError } from "next-auth"
import { z } from "zod"


export const signin = async(values: z.infer<typeof SigninSchema>) => {
    const validateFields = SigninSchema.safeParse(values)

    if(!validateFields.success){
        return{
            error: "Invalid fields"
        }
    }

    const { email, password } = validateFields.data

    try {
        await signIn("credentials",{
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        })
    } catch (error) {
        if (error instanceof AuthError){
            switch(error.type){
                case "CredentialsSignin":
                    return { error: "Invalid credential...!" }
                default:
                    return { error: "Something went wrong...!"}
            }
        }

        throw error
    }
}