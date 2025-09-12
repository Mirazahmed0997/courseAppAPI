import z from 'zod';
export declare const userRoutes: import("express-serve-static-core").Router;
export declare const createUserZodSchema: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    role: z.ZodOptional<z.ZodDefault<z.ZodEnum<{
        USER: "USER";
        ADMIN: "ADMIN";
        "SUPER ADMIN": "SUPER ADMIN";
    }>>>;
}, z.core.$strip>;
//# sourceMappingURL=User.Controller.d.ts.map