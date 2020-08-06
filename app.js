const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
//Routes
const noteBookRoutes = require("./routes/noteBooks");
const noteRoutes = require("./routes/notes");
const db = require("./db");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/notebooks", noteBookRoutes);
app.use("/notes", noteRoutes);

app.use((req, res, next) => {
  res.status(404).json("Path not found"); // when the path called is not exist
});
app.use((err, req, res, next) => {
  res.status(err.status || 500); // 500 y3ne backend error (notfound)
  res.json({
    message: err.message || "Internal Server Error",
  });
});

const run = async () => {
  try {
    await db.sync({ alter: true });
    console.log("Connection to the database successful!");
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }

  await app.listen(8000, () => {
    console.log("The app is running on localhost:8000");
  });
};

run();
