"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamResponse = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const examResponseSchema = new mongoose_1.default.Schema({
    userId: {
        type: String,
        //required: true
    },
    examId: {
        type: String,
        //required: true
    },
    response: [{
            questionId: { type: String },
            answer: { type: String },
            answered: { type: String },
            isCorrect: { type: String },
        }],
    isDisqualified: {
        type: String,
        //required: true
    },
});
exports.ExamResponse = mongoose_1.default.model("ExamResponse", examResponseSchema);
