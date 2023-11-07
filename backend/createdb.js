const pgtools = require("pgtools");
const config = {
  user: "postgres",
  host: "localhost",
  password: "AparnaA1308@",
  port: 5432,
};

pgtools.createdb(config, "", function (err, res) {
  if (err) {
    console.error(err);
    process.exit(-1);
  }
  console.log(res);
});
