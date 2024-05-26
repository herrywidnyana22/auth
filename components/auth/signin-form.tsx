'use client'

import * as z from "zod"

import { useForm } from "react-hook-form";
import { CardWrapper } from "./card-wrapper";
import { SigninSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ErrorMessage } from "./form-message";


export const SigninForm = () => {

    const initForm = useForm<z.infer<typeof SigninSchema>>({
        resolver: zodResolver(SigninSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit = (values: z.infer<typeof SigninSchema>) =>{
        
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
                        message="Something went wrong"
                    />
                    <Button
                        type="submit"
                        className="w-full"
                    >
                        Sign In
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    );
}