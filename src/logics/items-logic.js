const ItemModel = require("../models/item-model");

function getAllItemsAsync() {
    return ItemModel.find().exec();
}


module.exports = {
    getAllItemsAsync
}