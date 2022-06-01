import express from "express"
import cors from "cors"
import {
  setVideoInfo,
  downloadVideo,
} from "../controllers/YouTubeController.js"

const router = express.Router()

router.use(cors())
router.post("/video-info", setVideoInfo)
router.post("/video-download", downloadVideo)

export default router
