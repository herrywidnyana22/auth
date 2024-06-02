'use client'

import * as z from "zod"

import { useForm } from "react-hook-form";
import { CardWrapper } from "./card-wrapper";
import { SignupSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ErrorMessage } from "./form-message";
import { useState } from "react";
import { signup } from "@/actions/signup";
import { CgSpinner } from "react-icons/cg";


export const SignupForm = () => {

    const [success, setSuccess] = useState<string | undefined>()
    const [error, setError] = useState<string | undefined>()
    const [isPending, setIsPending] = useState<boolean>(false)

    const initForm = useForm<z.infer<typeof SignupSchema>>({
        resolver: zodResolver(SignupSchema),
        defaultValues: {
            name:"",
            email: "",
            password: ""
        }
    })

    const onSubmit = async(values: z.infer<typeof SignupSchema>) =>{
        setSuccess("")
        setError("")
        setIsPending(true)

        try {
            const createUser = await signup(values)
            setSuccess(createUser.success)
            setError(createUser.error)

            if (createUser.success) {
                initForm.reset()
            }

        } catch (error) {
            setError("Something error")
        } finally{
            setIsPending(false)
        }
    }

    return ( 
        <CardWrapper
            headerLabel="Create an account"
            backButtonLabel="Already have an account?"
            backButtonHref="/auth/signin"
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
                            name="name"
                            disabled={isPending}
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>
                                        Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            type="text"
                                            placeholder="John Cena"
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
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
                        type={error=="" || error===undefined ? "success" : "error"} 
                        message={error=="" || error===undefined ? success : error } 
                    />
                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isPending}
                    >
                        {
                            isPending 
                            ? <CgSpinner className="w-5 h-5 animate-spin"/>
                            : "Create an account"
                        }
                        
                        
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    );
}