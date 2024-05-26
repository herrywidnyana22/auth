'use client'

import Link from "next/link"
import { Button } from "../ui/button"

type BackButtonProps = {
    href: string
    label: string
}
export const BackButton = ({href, label}: BackButtonProps) => {
    return ( 
        <Button
            asChild
            size={"sm"}
            variant={"link"}
            className="
                w-full
                font-normal
            "
        >
            <Link href={href}>
                {label}
            </Link>
        </Button>
    );
}