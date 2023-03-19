const express = require('express')
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


module.exports = router;