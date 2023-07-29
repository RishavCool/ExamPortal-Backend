"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const questionSchema = new mongoose_1.default.Schema({
    quizId: {
        type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Quiz'
        //required: true
    },
    question: {
        type: String,
        //required: true
    },
    answer: {
        type: String,
        //required: true
    },
    image: {
        type: String,
        //required: true
    },
    options: {
        one: { type: String, required: true },
        two: { type: String, required: true },
        three: { type: String, required: true },
        four: { type: String, required: true },
    },
    isActive: {
        type: String,
        //required: true
    },
    questionType: {
        type: String,
        //required: true
    },
});
exports.Question = mongoose_1.default.model("Question", questionSchema);
