import pkg from "pg";
const { Client } = pkg;

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "AparnaA1308@",
  database: "BlogDb",
});

client.connect();

client.query(`SELECT * FROM users`, (err, res) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log(res.rows);
  }

  client.end();
});
