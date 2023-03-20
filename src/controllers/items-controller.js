const express = require('express')
const itemsLogic = require("../logics/items-logic");
const router = express.Router()

router.get("/", async (request, response) => {
    try {
        const items = await itemsLogic.getAllItemsAsync();
        response.json(items);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

router.get("/name/:name/quantity", async (request, response) => {
    try {
        const name = request.params.name;
        const quantity = await itemsLogic.getQuantityOfItemByNameAsync(name);
        response.json(quantity);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});


module.exports = router;