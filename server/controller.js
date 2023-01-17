let globalId = 0

const items = {}

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A faithful friend is a strong defense", "A fresh start will put you on your way", "A good time to finish up old tasks", "A lifetime friend shall soon be made", "A new outlook brightens your image and brings new friends", "A light heart carries you through all the hard times"]

        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    },

    getColor: (req, res) => {
        const colors = ["Red", "Yellow", "Blue", "Orange", "Green", "Purple"];
      
        let randomIndex = Math.floor(Math.random() * colors.length);
        let randomColor = colors[randomIndex];
      
        res.status(200).send(randomColor);
    },

    getName: (req, res) => {
        const names = ["David", "Maxine", "Jane", "Charles", "Norma"];
      
        let randomIndex = Math.floor(Math.random() * names.length);
        let randomName = names[randomIndex];
      
        res.status(200).send(randomName);
    },

    addFood: (req, res) => {
        const { food } = req.body

        items[globalId] = food
        globalId++
        console.log(globalId)
        res.status(200).send(items)
    },

    deleteFood: (req, res) => {
        delete items[req.params.id]

        res.status(200).send(items)
    }

}