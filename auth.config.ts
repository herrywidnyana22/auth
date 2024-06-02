import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import type { NextAuthConfig } from "next-auth"
import bcrypt from "bcryptjs"

import credentials from "next-auth/providers/credentials"
import { SigninSchema, SignupSchema } from "./schema"
import { getUserByEmail } from "./data/user"
 
export default { 
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        credentials({
            async authorize(credentials) {
                const validateFields = SigninSchema.safeParse(credentials)

                if(validateFields.success){
                    const { email, password } = validateFields.data

                    const user = await getUserByEmail(email)
                    if(!user || !user.password) return null

                    const isPasswordMatch = await bcrypt.compare(
                        password,
                        user.password
                    )

                    if(isPasswordMatch) return user
                }

                return null
            },
        })
    ] 
} satisfies NextAuthConfig