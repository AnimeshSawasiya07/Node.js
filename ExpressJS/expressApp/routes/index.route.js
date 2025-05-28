import express from "express"
import {indexPage,contactPage,aboutPage,signInPage,signUpPage} from "../controller/index.controller.js";
const router = express.Router();

router.get("/",indexPage);

router.get("/contact",contactPage);

router.get("/about",aboutPage);

router.get("/sign-in",signInPage);

router.get("/sign-up",signUpPage);

export default router;