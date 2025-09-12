"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserZodSchema = exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const zod_1 = __importDefault(require("zod"));
const URLSearchParams_d_1 = require("./../../../node_modules/@types/whatwg-url/lib/URLSearchParams.d");
exports.userRoutes = express_1.default.Router();
exports.createUserZodSchema = zod_1.default.object({
    firstName: zod_1.default
        .string()
        .min(4, { message: "First name must be at least 4 characters long" })
        .max(10, { message: "First name must be at most 10 characters long" })
        .trim(),
    lastName: zod_1.default
        .string()
        .min(4, { message: "Last name must be at least 4 characters long" })
        .max(10, { message: "Last name must be at most 10 characters long" })
        .trim(),
    email: zod_1.default
        .string()
        .email({ message: "Invalid email address" })
        .trim()
        .toLowerCase(),
    password: zod_1.default
        .string()
        .min(6, { message: "Password must be at least 6 characters long" })
        .trim(),
    role: zod_1.default.enum(["USER", "ADMIN", "SUPER ADMIN"])
        .default("USER")
        .optional(),
});
exports.userRoutes.post('/create', async (req, res) => {
    try {
        const body = await exports.createUserZodSchema.parseAsync(req.body);
        const user = await (0, URLSearchParams_d_1.create)(body);
        res.status(201).json({
            success: true,
            message: "User successfully created",
            user
        });
    }
    catch (error) {
        console.log(error);
    }
});
//# sourceMappingURL=User.Controller.js.map