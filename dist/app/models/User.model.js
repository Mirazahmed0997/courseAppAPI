"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: [true, "Already have this email"], },
    role: { type: String, enum: { values: ['USER', 'ADMIN', 'SUPER ADMIN'], message: "Role is not Found" }, default: 'USER', required: true, trim: true, uppercase: true },
    password: { type: String, required: true }
}, {
    versionKey: false,
    timestamps: true
});
userSchema.pre("save", async function (next) {
    console.log(this);
    this.password = await bcryptjs_1.default.hash(this.password, 10);
});
exports.User = (0, mongoose_1.model)('User', userSchema);
//# sourceMappingURL=User.model.js.map