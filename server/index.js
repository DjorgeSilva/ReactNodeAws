const express = require("express");
const cors = require("cors");
const user = require("./routes");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ success: true });
});

app.use("/api", user);

app.listen(process.env.PORT, () => {
  console.log(`Port listening on ${process.env.PORT}`);
});
