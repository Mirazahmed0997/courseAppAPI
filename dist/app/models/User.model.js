"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: [true, "Already have this email"], },
    password: { type: String, required: true }
}, {
    versionKey: false,
    timestamps: true
});
exports.User = (0, mongoose_1.model)('User', userSchema);
//# sourceMappingURL=User.model.js.map