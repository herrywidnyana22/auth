'use client'

import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa6";

type SocialProps = {
 
}

export const Social = ({}: SocialProps) => {
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
                onClick={() => {}}
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
                onClick={() => {}}
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