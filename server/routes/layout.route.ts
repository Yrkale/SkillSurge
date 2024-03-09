import express from "express";
import { authorizeRole, isAuthenticated } from "../middleware/auth";
import { createLayout } from "../controllers/layout.controller";
const layoutRouter = express.Router();

layoutRouter.post("/create-layout", isAuthenticated, authorizeRole("admin"), createLayout);

export default layoutRouter;