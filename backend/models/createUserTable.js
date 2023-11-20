import { client, connectToDatabase, queryUsers } from "./db.js";

const createUserTable = async () => {
  try {
    await connectToDatabase();

    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        
      );
    `);

    console.log("Users table created successfully");

    await queryUsers();
  } catch (error) {
    console.error("Error creating users table:", error);
  } finally {
    await client.end();
  }
};

createUserTable();
