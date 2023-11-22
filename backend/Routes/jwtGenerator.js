import JWT from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secretKey = process.env.JWT_SECRET_KEY;

const generateToken = async (email) => {
  const token = await JWT.sign(
    {
      email,
    },
    secretKey,
    {
      expiresIn: 5000,
    }
  );

  return token;
};

export default generateToken;
