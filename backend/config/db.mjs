// db.js
import pkg from "pg";

const { Client } = pkg;

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "AparnaA1308@",
  database: "BlogDb",
});

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

const queryUsers = async () => {
  try {
    const result = await client.query(`SELECT * FROM users`);
    return result.rows
  } catch (error) {
    console.error("Error querying users:", error);
  }
};

export { client, connectToDatabase, queryUsers };
