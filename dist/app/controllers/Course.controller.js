"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseRoutes = void 0;
const express_1 = __importDefault(require("express"));
const Course_model_1 = require("../models/Course.model");
exports.courseRoutes = express_1.default.Router();
exports.courseRoutes.post('/create', async (req, res) => {
    try {
        const body = req.body;
        const course = await Course_model_1.Course.create(body);
        res.status(201).json({
            status: true,
            message: " course successfully created",
            course
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.courseRoutes.get('/', async (req, res) => {
    try {
        const courses = await Course_model_1.Course.find().populate('user');
        res.status(201).json({
            status: true,
            message: "All courses",
            courses
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.courseRoutes.get('/:id', async (req, res) => {
    try {
        const param = req.params.id;
        const course = await Course_model_1.Course.findById(param).populate('user');
        res.status(201).json({
            status: true,
            message: "Single course",
            course
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.courseRoutes.patch('/update/:id', async (req, res) => {
    try {
        const updatedData = req.body;
        const param = req.params.id;
        const updatedCourse = await Course_model_1.Course.findByIdAndUpdate(param, updatedData, { new: true }).populate('user');
        res.status(201).json({
            status: true,
            message: "Single course",
            updatedCourse
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.courseRoutes.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedData = await Course_model_1.Course.findByIdAndDelete(id);
        res.status(201).json({
            status: true,
            message: "Course successfully deleted",
            deletedData
        });
    }
    catch (error) {
        console.log(error);
    }
});
//# sourceMappingURL=Course.controller.js.map