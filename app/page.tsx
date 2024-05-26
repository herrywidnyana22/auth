import { SigninButton } from "@/components/auth/signin-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";

const defaultFont = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {
  return (
    <main
      className="
        h-full
        flex
        flex-col
        items-center 
        justify-center
        bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
        from-sky-400 to-blue-800
      "
    >
      <div className="space-y-6 text-center">
        <h1 
          className={cn(`
            font-semibold 
            text-6xl 
            drop-shadow-md
            text-white`, 
            defaultFont.className
        )}>
          🔐Auth
        </h1>
        <p 
          className="
            text-lg
            text-white 
          "
        >
          a simple authenticator service
        </p>
        <div>
          <SigninButton>
            <Button
              variant={"secondary"}
              size={"lg"}
            >
              Sign in
            </Button>

          </SigninButton>
        </div>
      </div>
    </main>
  );
}
