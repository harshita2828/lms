import { Request, Response, NextFunction } from "express";
import ErrorHandler from "../utils/ErrorHandler";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import { generateLast12MonthData } from "../utils/analytics.generator";
import UserModel from "../models/user.model";
import CourseModel from "../models/course.model";
import OrderModel from "../models/orderModel";

// user users analytics ---- only admin
export const getUserAnalytics = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await generateLast12MonthData(UserModel);

      res.status(200).json({
        success: true,
        users,
      });
    } catch (error: any) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

//course 
export const getCoursesAnalytics = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const courses = await generateLast12MonthData(CourseModel);
  
        res.status(200).json({
          success: true,
          courses,
        });
      } catch (error: any) {
        return next(new ErrorHandler(error.message, 500));
      }
    }
  );

  //get order
  export const getOrderAnalytics = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const order = await generateLast12MonthData(OrderModel);
  
        res.status(200).json({
          success: true,
          order,
        });
      } catch (error: any) {
        return next(new ErrorHandler(error.message, 500));
      }
    }
  );
  
  
