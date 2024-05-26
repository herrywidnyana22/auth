import { cn } from "@/lib/utils"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

type FormErrorProps = {
    type: "error" | "success"
    message?: string
}
export const ErrorMessage = ({message, type}: FormErrorProps) => {
    if(!message) return null

    return ( 
        <div
            className={cn(`
               flex
               items-center
               gap-x-2
               p-3
               rounded-md
               text-sm`,
               type === "error" && "text-destructive bg-destructive/15",
               type === "success" && "text-emerald-500 bg-emerald-500/15"
            )}
        >
            <ExclamationTriangleIcon
                className="
                    w-4
                    h-4
                "
            />
            <p>{ message }</p>
        </div>
    );
}