import cors from "cors";
import express, { json } from "express";
import {
  connectToDatabase,
  insertBlog,
  queryUsers,
  queryBlogs
} from "../backend/config/db.mjs";
import bodyParser from "body-parser";
import { authRouter } from "./routes/auth.mjs";

const app = express();
const PORT = 8000;

app.use(json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use("/auth", authRouter);

app.get("/api/getUsers", async (req, res) => {
  try {
    await queryUsers();
    res.send("Successfully datas are displayed from database");
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal server error")
  }
});

app.post("/api/insertBlog", async (req, res)=>{
const { title, intro, body, conclusion } = req.body;
  var Blogres = await insertBlog(title, intro, body, conclusion);
  console.log(Blogres)
  return Blogres
})

app.listen(PORT, async () => {
  await connectToDatabase()
  console.log(`Server is running on port ${PORT}`);
});

app.get("/api/blogs", async (req, res) => {
  var blog = await queryBlogs();
  res.send(blog);
});