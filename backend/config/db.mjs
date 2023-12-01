import pkg from "pg";
import pgPromise from "pg-promise";

const { Client } = pkg;
const pgp = pgPromise();

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
    console.log(result);
    return result.rows;
  } catch (error) {
    console.error("Error querying users:", error);
  }
};

const queryBlogs = async () => {
  try {
    const result = await client.query(`SELECT * FROM Blogs`);
    console.log(result);
    return result.rows;
  } catch (error) {
    console.error("Error querying blogs:", error);
  }
};


const insertUser = async (name, email, password) => {
  try {
    const result = await client.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
      [name, email, password]
    );
    return result;
  } catch (error) {
    console.error("Error inserting user", error);
  }
};

const insertBlog = async(
  title,
  intro,
  body,
  conclusion
) => {
  try{
    const blogResult = await client.query("INSERT INTO Blogs(title, intro, body, conclusion) VALUES ($1,$2,$3,$4)",
    [title, intro, body, conclusion]);
    return blogResult
  } catch (error){
    console.log("Error inserting datas", error)
  }
};

const deleteBlog = async (id) => {
  try {
    const blogResult = await client.query(
      "DELETE FROM Blogs WHERE id = $1",
      [id]
    );
    return blogResult;
  } catch (error) {
    console.log("Error deleting blog", error);
    throw error;
  }
};

const editBlog = async (
  id,
  editedTitle,
  editedIntro,
  editedBody,
  editedConclusion
) => {
  try {
    const blogResult = await client.query(
      "UPDATE blogs SET title = $2, intro = $3, body = $4, conclusion = $5 WHERE id = $1 RETURNING *",
      [id, editedTitle, editedIntro, editedBody, editedConclusion]
    );
    console.log("editing success")
    return blogResult;
  } catch (error) {
    console.log("Error editing blog", error);
    throw error;
  }
};

export {
  client,
  connectToDatabase,
  queryUsers,
  insertUser,
  insertBlog,
  queryBlogs,
  deleteBlog,
  editBlog
};
