// utils/uploadFromBuffer.js
import streamifier from "streamifier"
import cloudinary from "./cloudinary.js"

const uploadFromBuffer = (
  buffer,
  folder = "jobzy/uploads",
  resourceType = "auto"
) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: resourceType,
        type: "upload",
        access_mode: "public",
      },
      (error, result) => {
        if (error) return reject(error)
        resolve(result)
      }
    )

    streamifier.createReadStream(buffer).pipe(uploadStream)
  })
}

export default uploadFromBuffer