"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./routes/routes");
const mongoose_1 = __importDefault(require("mongoose"));
//const cors = require('cors');
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
// initialize(
//     passport, 
//     (    email: any) => users.find((user: { email: any; }) => user.email === email),
//     id => users.find(user => user.id === id)
// )
// mongoose.connect(process.env.MONGODB_URL as string, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
// } as ConnectOptions)
// .then((db) => {
//     console.log("Database Connected Successfully");
// })
// .catch((err) => {
//     console.log("Error Connectiong to the Database");
// });
mongoose_1.default.set('strictQuery', false);
mongoose_1.default.connect(process.env.MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then((db) => {
    console.log("Database Connected Successfully");
})
    .catch((err) => {
    console.log("Error Connectiong to the Database");
});
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/', routes_1.router);
const corsOptions = {
    origin: '*',
    //credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};
app.use((0, cors_1.default)(corsOptions));
app.listen(PORT, () => {
    console.log(`Running on port http://localhost:${PORT}`);
});
