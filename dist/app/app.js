"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_Controller_1 = require("./controllers/User.Controller");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = 5000;
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/user', User_Controller_1.userRoutes);
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
exports.default = app;
//# sourceMappingURL=app.js.map