const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const users = require("./routes/User");
const pacientes = require("./routes/Paciente");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/users", users);
app.use("/pacientes", pacientes);

mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.gzdmt.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`, {
	useNewUrlParser: "true",
})
	.then(() => console.log("Mongoose is connected"))
	.catch(e => console.log(e));

app.listen(process.env.PORT, () =>
{
	console.log(`app is listening to PORT ${process.env.PORT}`);
});