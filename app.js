const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
//Routes
const noteBookRoutes = require("./routes/noteBooks");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/noteBooks", noteBookRoutes);

app.listen(8000, () => {
  console.log("The app is running on localhost:8000");
});
