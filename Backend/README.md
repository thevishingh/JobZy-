# ⚙️ JobZy Backend

Welcome to the **JobZy Backend** — the server-side of the **JobZy** job portal platform, built to handle authentication, user management, profile updates, job operations, and application workflows. This backend powers the core functionality for both **students** and **recruiters**, providing secure APIs, role-based access, and scalable data handling using the **MERN stack**. It is developed with **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**, with additional support for **JWT authentication**, **bcrypt password hashing**, and future-ready integration for **Multer** and **Cloudinary** for file uploads such as resumes and profile pictures. The system is designed to support recruiter features like posting jobs, managing applicants, and updating candidate statuses, while also supporting student features like profile management, resume handling, and job applications. This backend follows a structured architecture with separate folders for **controllers**, **routes**, **models**, **middlewares**, and **utilities**, making it easier to maintain and scale. 🚀

---

## ✨ Features

* 🔐 User registration and login authentication
* 🛡️ JWT-based protected routes
* 👤 Role-based access for **student** and **recruiter**
* 🧾 Profile update functionality
* 🔒 Password hashing with **bcryptjs**
* 🍪 Secure cookie-based authentication
* 🗂️ MongoDB database integration using **Mongoose**
* 🏢 Company and job-related backend support
* 📄 Resume and profile picture support planned with **Multer + Cloudinary**
* ⚡ Clean and modular backend architecture

---

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **JWT (jsonwebtoken)**
* **bcryptjs**
* **cookie-parser**
* **dotenv**
* **Multer** *(planned / optional)*
* **Cloudinary** *(planned / optional)*

---

## 📁 Folder Structure

```bash
backend/
│
├── controllers/       # Request handling logic
├── middlewares/       # Authentication and other middleware
├── models/            # Mongoose schemas and models
├── routes/            # API route definitions
├── utils/             # Utility/helper files
├── .env               # Environment variables
├── server.js          # Entry point
└── package.json
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `backend` folder and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=1d
NODE_ENV=development
```

If you later add file uploads with Cloudinary, you can also include:

```env
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

---

## ▶️ Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

If you are using `nodemon`, make sure your script looks something like this in `package.json`:

```json
"scripts": {
  "dev": "nodemon server.js"
}
```

---

## 🔐 Authentication Flow

* User registers with required details
* Password is hashed before saving
* User logs in with email, password, and role
* JWT token is generated on successful login
* Token is stored in an **HTTP-only cookie**
* Protected routes use authentication middleware to verify access

---

## 📌 API Capabilities

The backend is structured to support endpoints such as:

* `POST /register` → Register new user
* `POST /login` → Login user
* `POST /logout` → Logout user
* `PUT /profile/update` → Update user profile
* `GET /profile` → Fetch current user profile
* `POST /jobs` → Create job
* `GET /jobs` → Get all jobs
* `POST /apply/:id` → Apply for a job

You can adjust these routes based on your actual route structure.

---

## 🧠 Notes

* `phoneNumber` is required in the schema, so make sure it is included during registration
* Email should ideally be stored in lowercase for consistency
* `skills` inside profile are stored as an **array of strings**
* Profile-related data is nested inside the `profile` object in the database
* Resume upload and profile picture upload can be added later using **Multer** and **Cloudinary**

---

## 🚀 Future Improvements

* 📤 Resume upload with Cloudinary
* 🖼️ Profile picture upload
* 🏢 Company profile management
* 📬 Email notifications
* 🔎 Better filtering and search APIs
* 📊 Recruiter dashboard analytics
* 🧪 Backend API validation with a library like Zod or Joi

---

## 👨‍💻 Author

**Thevishingh**

If you like this project, give it a ⭐ and keep building.
