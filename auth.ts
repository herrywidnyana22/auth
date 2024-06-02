import NextAuth from "next-auth"
import authConfig from "./auth.config"

import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "./lib/db"
import { getUserByID } from "./data/user"
 
 
export const { 
  handlers, 
  auth, 
  signIn, 
  signOut 
} = NextAuth({
  callbacks:{
    async session({token, session}){
      if(token.role && session.user){
        session.user.role = token.role
      }
      return session
    },
    async jwt({token}) {
      if(!token.sub) return token

      const existUser = await getUserByID(token.sub)
      if(!existUser) return token

      token.role = existUser.role

      return token
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})