const express = require("express");
const user = require("./routes");
require("dotenv").config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ success: true });
});

app.use("/api", user);

app.listen(process.env.PORT, () => {
  console.log(`Port listening on ${process.env.PORT}`);
});
