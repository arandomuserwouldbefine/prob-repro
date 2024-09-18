import * as z from 'zod'

export const ContactFormSchema = z.object({
    name: z.string({ required_error: "name is required", invalid_type_error: "name must be string" }).trim().min(1, { message: "Name is required" }).regex(/^[A-Za-z\s]+$/, { message: "Name must contain only alphabetical characters" }),
    email: z.string({ required_error: "email is required", invalid_type_error: "email must be string" }).trim().email(),
    message: z.string({ required_error: "message is required", invalid_type_error: "message must be string" }).trim().min(1, { message: "Message is required" })
})


