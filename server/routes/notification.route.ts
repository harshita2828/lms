import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import { getNotification, updateNotification } from "../controllers/notification.controller";
import { getAllOrders } from "../controllers/order.controller";
const notificationRoute = express.Router();

notificationRoute.get("/get-all-notifications", isAuthenticated, authorizeRoles("admin"), getNotification )

notificationRoute.put("/update-notification/:id", isAuthenticated, 
authorizeRoles("admin"), 
updateNotification )

notificationRoute.get("/get-orders", isAuthenticated, 
authorizeRoles("admin"), 
getAllOrders )

export default notificationRoute;