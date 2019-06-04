const express = require("express");
const connectDB = require("./db/db");
const app = express();
const path = require("path");

//Connect DB
connectDB();

app.use(express.json({ extended: false }));

app.use("/api/user", require("./routes/api/user"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/listing", require("./routes/api/listing"));
app.use("/api/contact", require("./routes/api/contact"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
  });
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
