const mongodb = require("mongodb");
const dal = require("../data-access-layer/dal");

// Get all products: 
function getAllItemsAsync() {
    return new Promise((resolve, reject) => {
        dal.getDatabase().collection("items").find({}).toArray((err, items) => {
            if (err) { return reject(err) }
            resolve(items)
        });
    });
}


module.exports = {
    getAllItemsAsync
}