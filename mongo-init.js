conn = new Mongo();
db = conn.getDB("octopuscs-db");


/** @see https://www.mongodb.com/docs/v2.2/tutorial/create-an-auto-incrementing-field/ */
db.counters.insert(
    {
       _id: "itemId",
       seq: 0
    }
)

function getNextSequence(name) {
    var ret = db.counters.findAndModify(
        {
          query: { _id: name },
          update: { $inc: { seq: 1 } },
          new: true
        }
   );

   return ret.seq;
}

db.items.insert({ _id: getNextSequence("itemId"), "name": "apples", "qty": 5, "rating": 3 });
db.items.insert({ _id: getNextSequence("itemId"), "name": "bananas", "qty": 7, "rating": 1, "microsieverts": 0.1 });
db.items.insert({ _id: getNextSequence("itemId"), "name": "oranges", "qty": 6, "rating": 2 });
db.items.insert({ _id: getNextSequence("itemId"), "name": "avocados", "qty": 3, "rating": 5 });
