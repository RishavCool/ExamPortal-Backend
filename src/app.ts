import express, {Request,Response} from "express";
import dotenv from "dotenv";
import { router } from "./routes/routes";
import mongoose, {ConnectOptions} from "mongoose";
//const cors = require('cors');
import cors from "cors";
import passport from "passport";
import { initialize } from "./passport-configs";

dotenv.config();


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
mongoose.set('strictQuery',false);
mongoose.connect(process.env.MONGODB_URL as string, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
} as ConnectOptions)
.then((db) => {
    console.log("Database Connected Successfully");
})
.catch((err) => {
    console.log("Error Connectiong to the Database");
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', router);

const corsOptions ={
    origin:'*', 
    //credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,

 }
 
 app.use(cors(corsOptions));


app.listen(PORT, () => {
    console.log(`Running on port http://localhost:${PORT}`);
});