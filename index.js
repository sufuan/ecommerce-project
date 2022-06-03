const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5000;






const userrouter = require('./routes/user.route')





app.use(cors());
app.use(express.json());






const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => console.log("connected"))
  .catch(() => console.log("failed"));




app.use('/api/user/', userrouter)




app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
