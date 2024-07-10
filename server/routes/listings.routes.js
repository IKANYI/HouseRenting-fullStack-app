import {Router} from "express"
import { getAllHouses } from "../controllers/listings.controller.js"

const router = Router()

router.get('/product/houses', getAllHouses);

export default router