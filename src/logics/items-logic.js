const ItemModel = require("../models/item-model");

function getAllItemsAsync() {
    return ItemModel.find().exec();
}

function getOneItemAsync(_id) {
    return ItemModel.findById(_id).exec();
}

function getItemByNameAsync(name) {
    return ItemModel.findOne({ name: name }).exec();
}

function getQuantityOfItemByNameAsync(name) {
    return ItemModel.findOne({ name: name }, 'qty').exec();
}


module.exports = {
    getAllItemsAsync,
    getQuantityOfItemByNameAsync
}