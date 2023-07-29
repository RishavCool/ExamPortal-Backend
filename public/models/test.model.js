"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const testSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Number,
        //required: true
    },
});
exports.Test = mongoose_1.default.model("Test", testSchema);
