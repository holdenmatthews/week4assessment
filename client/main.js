const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const colorBtn = document.getElementById("colorButton");
const nameBtn = document.getElementById("nameButton");
const foodField = document.getElementById("food-item");

const getCompliment = () => {
  axios.get("/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getFortune = () => {
  axios.get("/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getColor = () => {
  axios.get("/api/color/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getName = () => {
  axios.get("/api/name/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

let items = {};

const addFood = (e) => {
  const food = e.target.value;
  if (!(e.key === "Enter")) return;
  axios
    .post("/api/food", { food })
    .then((res) => {
      buildList(res);
      clearInput();
    })
    .catch(function (error) {
      console.log(error);
    });
};

const deleteFood = (id) => {
  axios
    .delete(`/api/food/${id}`)
    .then((res) => {
      buildList(res);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const editFood = (id) => {
  const itemContainer = document.querySelector(`#list-item_${id}`);
  const input = document.createElement("input");
  itemContainer.appendChild(input);

  input.addEventListener("keypress", (e) => {
    const food = e.target.value;
    if (!(e.key === "Enter")) return;
    axios.put(`/api/food/${id}`, { food })

      .then((res) => {
       
        buildList(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
};

const buildList = (res) => {
  const listContainer = document.getElementById("list-container");
  listContainer.innerHTML = "";
  items = res.data;
  for (const id in items) {
    const foodItem = document.createElement("div");
    foodItem.id = `list-item_${id}`;
    foodItem.innerHTML = `
        
        <p>${items[id]}</p>
        <button onclick="deleteFood(${id})">X</button>
        <button onclick="editFood(${id})">edit</button>

        `;
    listContainer.appendChild(foodItem);
  }
};

const clearInput = () => {
  const input = document.getElementById("food-item");
  input.value = "";
};

complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
colorBtn.addEventListener("click", getColor);
nameBtn.addEventListener("click", getName);
foodField.addEventListener("keypress", addFood);
