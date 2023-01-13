const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const colorBtn = document.getElementById("colorButton")
const nameBtn = document.getElementById("nameButton")
const foodField = document.getElementById("food-item")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data
            alert(data)
    })
}

const getColor = () => {
    axios.get("http://localhost:4000/api/color/")
        .then(res => {
            const data = res.data
            alert(data)
        })
}

const getName = () => {
    axios.get("http://localhost:4000/api/name/")
        .then(res => {
            const data = res.data
            alert(data)
        })
}

const addFood = (food) => {
    food = foodField.body
    axios.get("http://localhost:4000/api/food")
        .then(res => {
            const data = res.data
            let foodItem = document.createElement('div')
            foodItem.textContent = `${data}`
        })
}

const deleteFood = (food) => {
    axios.delete("http://localhost:4000/api/food/:id")
        .then(res => {
            
        })
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
colorBtn.addEventListener('click', getColor)
nameBtn.addEventListener('click', getName)
foodField.addEventListener('submit', addFood)