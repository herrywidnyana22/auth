'use client'

import { z } from "zod"
import { useForm } from "react-hook-form";
import { CardWrapper } from "./card-wrapper";
import { SigninSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ErrorMessage } from "./form-message";
import { signin } from "@/actions/signin";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";


export const SigninForm = () => {

    const [error, setError] = useState<string | undefined>()
    const [isPending, setIsPending] = useState<boolean>(false)

    const initForm = useForm<z.infer<typeof SigninSchema>>({
        resolver: zodResolver(SigninSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit = async(values: z.infer<typeof SigninSchema>) =>{
        setIsPending(true)
        try {
            const login = await signin(values)
            setError(login?.error)

        } catch (error) {
            setError("Something error")
        } finally{
            setIsPending(false)
        }
    }

    return ( 
        <CardWrapper
            headerLabel="Welcome back"
            backButtonLabel="Don't have an account?"
            backButtonHref="/auth/signup"
            showSocial
        >
            <Form {...initForm}>
                <form
                    onSubmit={initForm.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    <div
                        className="
                            space-y-4
                        "
                    >
                        <FormField
                            control={initForm.control}
                            name="email"
                            disabled={isPending}
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>
                                        Email
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="email"
                                            placeholder="email@example.com"
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={initForm.control}
                            name="password"
                            disabled={isPending}
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>
                                        Password
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="password"
                                            placeholder="********"
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    </div>
                    <ErrorMessage
                        type={"error"} 
                        message={ error } 
                    />
                    <Button
                        type="submit"
                        className="w-full"
                    >
                        {
                            isPending 
                            ? <CgSpinner className="w-5 h-5 animate-spin"/>
                            : "Sign In"
                        }
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    );
}