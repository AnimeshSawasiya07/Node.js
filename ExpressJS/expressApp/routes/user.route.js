import express from "express";
import {signUp,signIn,checkForEmail,signOut} from "../controller/user.controller.js"

const router = express.Router();

router.post("/signup",signUp)
router.get("/check-for-email-id/:userEmail",checkForEmail)
router.post("/signin",signIn)
router.get("/sign-out",signOut)

export default router;