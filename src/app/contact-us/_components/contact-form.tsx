"use client"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ContactFormSchema } from "@/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FormSuccess } from "@/components/form-success";
import { useState, useRef, useTransition } from "react";
import { FormError } from "@/components/form-error";

export const ContactForm = () => {
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("")
    const [isPending, startTransition] = useTransition();
    const successRef = useRef<HTMLDivElement | null>(null);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<z.infer<typeof ContactFormSchema>>({
        resolver: zodResolver(ContactFormSchema),
    });

    const onSubmit = async (data: z.infer<typeof ContactFormSchema>) => {
        console.log("Submit the form")

    };

    return (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-4">
                {/* Name field */}
                <div className="w-full">
                    <label htmlFor="name" className="block text-sm font-medium">
                        Name
                    </label>
                    <Input
                        {...register("name")}
                        type="text"
                        id="name"
                        disabled={isPending}
                        placeholder="Your Name"
                        className="mt-1 w-full"
                    />
                    <p className="text-destructive text-sm font-medium mt-1">
                        {errors?.name?.message}
                    </p>
                </div>

                {/* Email field */}
                <div className="w-full">
                    <label htmlFor="email" className="block text-sm font-medium">
                        Email
                    </label>
                    <Input
                        type="email"
                        {...register("email")}
                        disabled={isPending}
                        id="email"
                        placeholder="Your Email"
                        className="mt-1 w-full"
                    />
                    <p className="text-destructive text-sm font-medium mt-1">
                        {errors?.email?.message}
                    </p>
                </div>

                {/* Message field */}
                <div className="w-full">
                    <label htmlFor="message" className="block text-sm font-medium">
                        Message
                    </label>
                    <Textarea
                        id="message"
                        disabled={isPending}
                        {...register("message")}
                        placeholder="Your Message"
                        rows={5}
                        className="mt-1 w-full"
                    />
                    <p className="text-destructive text-sm font-medium mt-1">
                        {errors?.message?.message}
                    </p>
                </div>
            </div>

            {/* Submit button */}
            <div className="w-full flex justify-center">
                <Button type="submit" disabled={isPending} className="w-full py-2">
                    {isPending ? "Submitting" : "Submit"}
                </Button>
            </div>

            {/* FormSuccess component */}
            <div ref={successRef}> {/* Attach the ref to this div */}
                <FormError message={error} />
                <FormSuccess message={success} />
            </div>
        </form>
    );
};
