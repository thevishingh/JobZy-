import streamifier from "streamifier";
import cloudinary from "../utils/cloudinary.js";

const uploadFromBuffer = (buffer) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "jobzy/resumes",
        resource_type: "image",
        type: "upload",
        access_mode: "public",
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );

    streamifier.createReadStream(buffer).pipe(uploadStream);
  });
};

export default uploadFromBuffer;