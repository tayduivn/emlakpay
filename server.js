const express = require("express");
const connectDB = require("./config/db");
const app = express();

//Connect DB
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

//Define routes
app.get("/", (req, res) => res.send("API"));

app.use("/api/user", require("./routes/api/user"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/listing", require("./routes/api/listing"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
