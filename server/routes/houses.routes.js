import { Router} from "express";
import { newProduct } from '../controllers/houses.controllers.js'

const router = Router();

router.post("/houses",newProduct )

export default router;