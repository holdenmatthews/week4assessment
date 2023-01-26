const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getColor, getName, addFood, deleteFood, editFood } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.get("/api/color", getColor)
app.get("/api/name", getName)
app.post("/api/food", addFood)
app.delete("/api/food/:id", deleteFood)
app.put("/api/food/:id", editFood)

app.listen(4000, () => console.log("Server running on 4000"));
