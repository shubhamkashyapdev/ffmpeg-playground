import express from "express"
import cors from "cors"
import { setVideoInfo } from "../controllers/YouTubeController.js"

const router = express.Router()

router.use(cors())
router.post("/video-info", setVideoInfo)
export default router
