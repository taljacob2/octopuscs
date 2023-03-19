conn = new Mongo();
db = conn.getDB("octopuscs-db");


db.items.createIndex({ "item.zip": 1 }, { unique: false });

db.items.insert({ "name": "apples", "qty": 5, "rating": 3 });
db.items.insert({ "name": "bananas", "qty": 7, "rating": 1, "microsieverts": 0.1 });
db.items.insert({ "name": "oranges", "qty": 6, "rating": 2 });
db.items.insert({ "name": "avocados", "qty": 3, "rating": 5 });
