'use client'

import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa6";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";


export const Social = () => {
    
    const socialClick=(provider: "google" | "github")=>{
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT
        })
    }

    return ( 
        <div
            className="
                w-full
                flex
                items-center
                gap-x-2
            "
        >
            <Button
                onClick={() => socialClick("google")}
                size={"lg"}
                variant={"outline"}
                className="w-full"
            >
                <FcGoogle
                    className="
                        w-5
                        h-5
                    "
                />
            </Button>
            <Button
                onClick={() => socialClick("github")}
                size={"lg"}
                variant={"outline"}
                className="w-full"
            >
                <FaGithub
                    className="
                        w-5
                        h-5
                    "
                />
            </Button>
        </div>
    );
}