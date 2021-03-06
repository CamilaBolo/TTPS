const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
const PORT = 3001;

const employees = require("./routes/Employee");
const admins = require("./routes/Admin");

app.use("/employees", employees);
app.use("/admins", admins);

mongoose.connect("mongodb://localhost:27017/ttps", {
  useNewUrlParser: "true",
});
mongoose.connection.on("error", (err) => {
  console.log("err", err);
});
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected");
});

app.listen(PORT, () => {
  console.log(`app is listening to PORT ${PORT}`);
});
