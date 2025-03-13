import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./lib/db.js"; // ฟังก์ชันสำหรับเชื่อมต่อ MongoDB
import authRouter from "./routers/auth.router.js";

dotenv.config();  // โหลดตัวแปรจาก .env

const POST = process.env.PORT || 5000;  // ถ้าไม่มี PORT ให้ใช้ค่า 5000
const FRONTEND_URL = process.env.FRONTEND_URL;

const app = express();

app.use(express.json()); // รองรับการส่งข้อมูลแบบ JSON

app.use(
  cors({
    origin: FRONTEND_URL,  // กำหนดแหล่งที่มาให้อนุญาตให้เชื่อมต่อ
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("<h1>Welcome To Restful API Project Chat </h1>");
});

app.use("/api/v1/auth", authRouter);

// ฟังก์ชันที่ทำงานเมื่อเชื่อมต่อกับ MongoDB
app.listen(POST, () => {
  console.log(`Server is running on http://localhost:${POST}`);
  connectDB();  // เชื่อมต่อ MongoDB
});
