const mongoose = require("mongoose");

function connectAsync() {
    return new Promise((resolve, reject) => {
        const options = { useNewUrlParser: true, useUnifiedTopology: true };
        mongoose.connect(process.env.MONGO_URI, options, (err, db) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(db);
        });
    });
}

(async () => {
    try {
        await connectAsync();
    }
    catch(err) {
        console.log(err);
    }
})();
