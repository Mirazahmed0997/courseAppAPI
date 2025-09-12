"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const mongoose_1 = __importDefault(require("mongoose"));
let server;
const port = 5000;
async function main() {
    try {
        await mongoose_1.default.connect('mongodb+srv://ecomstore3b_db_user:ecomstore3b_db_user@cluster0.zgwmavw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log("connected to mongoose");
        app_1.default.listen(port, async () => {
            console.log(`🚀 Server is running at http://localhost:${port}`);
        });
    }
    catch (error) {
    }
}
main();
//# sourceMappingURL=server.js.map