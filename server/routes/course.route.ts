import express from "express";
import { uploadCourse, editCourse, getSingleCourse, getAllCourses, getCourseByUser, addQuestion, addAnswer, addReview, addReplyToReview } from "../controllers/course.controller";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import { deleteCourrse } from "../controllers/user.controller";
const courseRouter = express.Router();

courseRouter.post(
  "/create-course",
  isAuthenticated,
  authorizeRoles("admin"),
  uploadCourse
);

courseRouter.put( 
    "/edit-course/:id",
    isAuthenticated,
    authorizeRoles("admin"),
    editCourse
  );

  courseRouter.get( 
    "/get-course/:id",
    getSingleCourse
  );

  courseRouter.get(
    "/get-courses",
    getAllCourses
  );

  courseRouter.get(
    "/get-course-content/:id",
    isAuthenticated, 
    getCourseByUser
  );

  courseRouter.put(
    "/add-question",
    isAuthenticated,
    addQuestion
  );

  courseRouter.put(
    "/add-answer",
    isAuthenticated,
    addAnswer
  );

  courseRouter.put(
    "/add-review/:id",
    isAuthenticated,
    addReview
  );

  courseRouter.put(
    "/add-reply",
    isAuthenticated,
    authorizeRoles("admin"),
    addReplyToReview
  );

  courseRouter.get(
    "/get-courses",
    isAuthenticated,
    authorizeRoles("admin"),
    getAllCourses
  );

  courseRouter.delete(
    "/delete-course/:id",
    isAuthenticated,
    authorizeRoles("admin"),
    deleteCourrse
  );

export default courseRouter;
