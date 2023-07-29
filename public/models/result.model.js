"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const resultSchema = new mongoose_1.default.Schema({
    userId: {
        type: String,
        //required: true
    },
    examId: {
        type: String,
        //required: true
    },
    questionLength: {
        type: String,
        //required: true
    },
    questionAttempted: {
        type: String,
        //required: true
    },
    totalMarks: {
        type: String,
        //required: true
    },
    correctAns: {
        type: String,
        //required: true
    },
    wrongAns: {
        type: String,
        //required: true
    },
});
exports.Result = mongoose_1.default.model("Result", resultSchema);
