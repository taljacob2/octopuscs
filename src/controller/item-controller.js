const express = require('express')
const router = express.Router()

router.get("/", async (request, response) => {
    try {
        const members = await membersLogic.getAllMembersAsync();
        response.json(members);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});


module.exports = router;