import { NextFunction , Response} from "express";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import OrderModel from "../models/orderModel";
import UserModel from "../models/user.model";
import CourseModel from "../models/course.model";

//create new order

export const newOrder = CatchAsyncError(async(data:any, next:NextFunction, res:Response) => {
   const order = await OrderModel.create(data);

    res.status(201).json({
        success:true,
        order,
    })
})

//get all orders
export const getAllOrdersServices=async (res:Response) => {
    const orders = await OrderModel.find().sort({createdAt:-1});

    res.status(201).json({
        success:true,
        orders,
    });
};