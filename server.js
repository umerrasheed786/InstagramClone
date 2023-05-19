const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const path = require("path");
mongoose
  .connect("mongodb+srv://umer:2684@cluster0.fxd6unk.mongodb.net/instagram", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });
const userSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
  },
  { timestamps: true }
);
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
const User = mongoose.model("User", userSchema);
app.use(express.json({ extended: true }));

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  User.create({ username: username, password: password });
  res.status(200).json({ message: "login successful" });
});

app.use("/", express.static(path.join(__dirname, "./build")));

// Serve admin and frontend index files
app.get("/admin/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../admin/build", "index.html"));
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "./build", "index.html"));
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
