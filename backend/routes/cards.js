const express = require("express")
const {getCardById,postCard,deleteCardById} = require("../controllers/cardsController")

const cardsRouter = express.Router()

//GET card by id   /api/cards?id=1
cardsRouter.get("/",getCardById)
//POST a card  /api/cards
cardsRouter.post("/",postCard)
//DELETE card by id  /api/cards/:card_id
cardsRouter.delete("/:card_id",deleteCardById)//动态参数需要在后端定义

module.exports = cardsRouter