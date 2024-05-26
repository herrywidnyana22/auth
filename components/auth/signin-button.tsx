'use client'

import { useRouter } from "next/navigation"

type LoginButtonProps = {
    children: React.ReactNode
    mode?: "modal" | "redirect"
    asChild?: boolean
}

export const SigninButton = ({
    children,
    mode,
    asChild
}: LoginButtonProps) => {
    const router = useRouter()

    const onClickButton = () =>{
        router.push("/auth/signin")
    }
    return ( 
        <span
            onClick={onClickButton}
            className="
                cursor-pointer
            "
        >
            { children }
        </span>
    );
}