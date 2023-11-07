const app = require('express')();

const PORT = 8000;

const details = [
  {
    title: "Love",
    intro: "It is the pure form of love from mother"
  },{
    title: "education",
    intro: "Wisdom is the key to success"
  }
]

app.get("/", (req, res) => {
  res.json(details);
});

app.listen(
    PORT,
    () => console.log( `Server is running sucessfully on ${PORT}`)
);

