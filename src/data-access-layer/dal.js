const mongodb = require("mongodb");

function connectAsync() {
    return new Promise((resolve, reject) => {
        const options = { useNewUrlParser: true, useUnifiedTopology: true };
        mongodb.MongoClient.connect(config.database.connectionString, options, (err, mongoClient) => {
            if (err) return reject(err);
            const db = mongoClient.db();
            resolve(db);
        });
    });
}

let database;
connectAsync().then(db => database = db).catch(err => console.error(err));

function getDatabase() {
    return database;
}

module.exports = {
    getDatabase
};