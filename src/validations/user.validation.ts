import { z } from 'zod';

// Define validation schema for Sign up
export const signupValidation = z.object({
    username: z.string().min(1, { message: 'username is required' }),
    fullname: z.string().min(1, { message: 'fullname is required' }),
    email: z.string().email({ message: 'Invalid email address format' }),
    password: z
        .string()
        .min(6, { message: 'Password must be at least 6 characters long' }),
    profilePicture: z.string().optional(),
    bio: z.string().optional()
});

// Define validation schema for Sign in
export const signinValidation = z.object({
    email: z.string().email({ message: 'Invalid email address format' }),
    password: z
        .string()
        .min(6, { message: 'Password must be at least 6 characters long' })
});