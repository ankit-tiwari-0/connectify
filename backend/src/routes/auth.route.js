import { Router } from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";


const router = Router();


router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.post("/update-profile", protectRoute, updateProfile)



export default router;