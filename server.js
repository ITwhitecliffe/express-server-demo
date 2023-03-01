const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

// app.get("/", (req, res) => {
//   console.log("Hello!");
//   //   res.status(500).json({ message: "Server is down today" });
//   //   res.send("HiHi");
//   //   res.download("server.js");
//   res.render("index");
// });

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Coneected to Database"));

app.use(express.json());

const subscribersRouter = require("./routes/subscribers");
app.use("/subscribers", subscribersRouter);

app.listen(4000, () => console.log("Server started"));
