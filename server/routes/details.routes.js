import { Router } from "express";
const router = Router();
import {createUser} from "../controllers/details.controllers.js"



router.post("/",createUser );



export default router;
