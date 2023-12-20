require('dotenv').config();
import express, { Request, Response, NextFunction, response } from "express";
export const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import { request } from "http";
import {ErrorMiddleware} from "./middleware/error";

//body parser 
app.use(express.json({limit: "50mb"}));

//cookie parser
app.use(cookieParser());

//cors = cross origin resource sharing
app.use(cors({
    origin: process.env.ORIGIN
}));

//testing route
app.get("/test", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        success: true,
        message: "api is working",
    });
});

//unkonwn error
app.all("*", (req: Request, res: Response, next: NextFunction) => {

    const err = new Error(`Route ${req.originalUrl} not found`) as any;
    err.statusCode = 404;
    next(err);
})

app.use(ErrorMiddleware);