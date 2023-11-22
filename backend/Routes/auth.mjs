import { Router } from "express";
const router = Router();
import { check, validationResult } from "express-validator";
import { insertUser, queryUsers } from "../config/db.mjs";
import pkg from "bcrypt";
import generateToken from "./jwtGenerator.js";



router.post(
  "/register",
  [
    check("email", "Please provide a valid email").isEmail(),
    check("password", "Please make sure your password is strong").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    //VALIDATE THE INPUT
    const error = validationResult(req);
    const { name, email, password } = req.body;
    let hashedPassword = await pkg.hash(password, 10);
    generateToken()
    console.log(hashedPassword)
    var response;
    await queryUsers().then((res) => (response = res));
    let userExist =
      response.length > 0
        ? response?.some((user) => user.email === email)
        : "error on fetching users";
    console.log(userExist);
    if (!error.isEmpty()) {
      return res.json({
        error: error.array(),
      });
    } else if (userExist) {
      return res.status(404).send("This user already exist");
    } else if (!userExist) {
      var result = await insertUser(name, email, hashedPassword);
      if (result.rows.length > 0) {
        console.log(result.rows);
      } else {
        console.log("No data found");
      }
    }

    res.json({
      token
    })
  }
);

router.post("/login", async (req, res) => {
  const { email } = req.body;
  const token = await generateToken(email);
  res.json({ token });
});

export { router as authRouter };
