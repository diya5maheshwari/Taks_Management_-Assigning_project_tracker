import express from "express";
import { register, login } from "../controllers/authcontrollers.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { getMe } from "../controllers/authcontrollers.js";


const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", authMiddleware, getMe);
export default router;

