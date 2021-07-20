const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require("./config/database");

//Connect to the database
mongoose.connect(config.database);

//On connection
mongoose.connection.on("connected", () => {
  console.log("Connected to database " + config.database);
});

//On error
mongoose.connection.on("error", (err) => {
  console.log("Database error " + error);
});

const app = express();

const users = require("./routes/users");

const port = 3000;

//Cors middleware
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, "public")));

//Body parser middleware
app.use(
  bodyParser.json({
    extended: true,
  })
);

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

app.use("/users", users);

//Index route
app.get("/", (req, res) => {
  res.send("Invalid endpoint :D");
});

//Start server
app.listen(port, () => {
  console.log("Server started on port " + port);
});
