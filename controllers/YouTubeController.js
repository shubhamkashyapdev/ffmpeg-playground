import ytdl from "ytdl-core"
import fs from "fs"

export const setVideoInfo = async (req, res) => {
  const url = req.body.url
  try {
    res.header("Access-Control-Allow-Origin", "*")
    const info = await ytdl.getBasicInfo(url, ["en"])
    const image = info.videoDetails.thumbnails[0].url
    const title =
      info.videoDetails.title +
      " by " +
      info.videoDetails.author.name +
      "-" +
      new Date().getTime().toString()
    const slug = title.replace(/\s+/g, "-").toLowerCase()
    ytdl(url)
      .pipe(fs.createWriteStream(`${process.cwd()}/uploads/${slug}.mp4`))
      .on("finish", async () => {
        const file = `/uploads/${slug}.mp4`
        res.status(200).json({
          success: true,
          data: {
            title,
            image,
            file,
          },
        })
      })
  } catch (err) {
    res.json({
      sucess: false,
      error: err.message,
    })
  }
}

export const downloadVideo = async (req, res) => {
  const url = req.body.url
  try {
    const info = await ytdl.getBasicInfo(url, ["en"])
    const image = info.videoDetails.thumbnails[0].url
    const title =
      info.videoDetails.title +
      " by " +
      info.videoDetails.author.name +
      "-" +
      new Date().getTime().toString()
    const slug = title.replace(/\s+/g, "-").toLowerCase()
    ytdl(url)
      .pipe(fs.createWriteStream(`${process.cwd()}/uploads/${slug}.mp4`))
      .on("finish", async () => {
        const file = `/uploads/${slug}.mp4`
        res.status(200).json({
          success: true,
          data: {
            title,
            image,
            file,
          },
        })
      })
  } catch (err) {
    res.json({
      sucess: false,
      error: err.message,
    })
  }
}
