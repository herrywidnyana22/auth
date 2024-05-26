import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const defaultFont = Poppins({
    subsets: ["latin"],
    weight: ["600"],
})

type HeaderProps = {
    label: string
}
export const Header = ({label}: HeaderProps) => {
    return ( 
        <div
            className="
                w-full
                flex
                flex-col
                gap-y-4
                items-center
                justify-center
            "
        >
            <h1 
                className={cn(`
                    font-semibold
                    text-3xl`,
                    defaultFont.className
                )}
            >
                🔐Auth
            </h1>
            <p
                className="
                    text-sm
                    text-muted-foreground
                "
            >
                { label }
            </p>
        </div>
    );
}