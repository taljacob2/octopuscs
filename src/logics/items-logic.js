const ItemModel = require("../models/item-model");

function getAllItemsAsync() {
    return ItemModel.find().exec();
}

function getQuantityOfItemByNameAsync(name) {
    return ItemModel.findOne({ name: name }, 'qty').exec();
}


module.exports = {
    getAllItemsAsync,
    getQuantityOfItemByNameAsync
}