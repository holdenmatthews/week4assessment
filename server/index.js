const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static(`${__dirname}/../client`))

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '05713790d105435a958f62a968079725',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

const { getCompliment, getFortune, getColor, getName, addFood, deleteFood, editFood } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.get("/api/color", getColor)
app.get("/api/name", getName)
app.post("/api/food", addFood)
app.delete("/api/food/:id", deleteFood)
app.put("/api/food/:id", editFood)

app.listen(4000, () => console.log("Server running on 4000"));
