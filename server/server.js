const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(
  "mongodb+srv://anjali:VYlWyjMjp0UOiPvI@cluster0.htgv3vd.mongodb.net/agileflow?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => {
  console.log("MongoDB Connected");
})
.catch((err) => {
  console.log("MongoDB Error:", err);
});

// Test Route
app.get("/", (req, res) => {
  res.send("AgileFlow Backend Running");
});

// Server Start
app.listen(5000, () => {
  console.log("Server running on port 5000");
});