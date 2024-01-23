import express from "express";
import {
  activateUser,
  registrationUSer,
  loginUser,
  logoutUser,
  updateAccessToken,
  getUserInfo,
  socialAuth,
  updateUserInfo,
  updatePassword,
  updateProfilePicture,
  updateUserRole,
  deleteUser,
} from "../controllers/user.controller";
const userRouter = express.Router();
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import { getAllUsersService, getUserById } from "../services/user.service";

userRouter.post("/registration", registrationUSer);
userRouter.post("/activate-user", activateUser);
userRouter.post("/login", loginUser);
userRouter.get(
  "/logout",
  isAuthenticated,
  authorizeRoles("admin  "),
  logoutUser
);
userRouter.get("/refresh", updateAccessToken);
userRouter.get("/me", isAuthenticated, getUserInfo);
userRouter.post("/socialAuth", socialAuth);
userRouter.put("/update-user-info", isAuthenticated, updateUserInfo);
userRouter.put("/update-user-password", isAuthenticated, updatePassword);
userRouter.put("/update-user-avatar", isAuthenticated, updateProfilePicture);

userRouter.get(
  "/get-users",
  isAuthenticated,
  authorizeRoles("admin"),
  getAllUsersService
);

userRouter.put(
  "/update-user",
  isAuthenticated,
  authorizeRoles("admin"),
  updateUserRole
);


userRouter.delete(
  "/delete-user/:id",
  isAuthenticated,
  authorizeRoles("admin"),
  deleteUser
);

export default userRouter;
