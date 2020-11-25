const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactbooks"
);

const bookSeed = [

  {
    thumbnail: "http://getlitwithpaula.com/wp-content/uploads/2018/08/factfulness-661x1024.jpg",
    link:
      "https://www.chapters.indigo.ca/en-ca/books/factfulness-ten-reasons-were-wrong/9781250107817-item.html",
    Books: [
      ,
      "title",
      "Hans Rosling",
    ],
    title: "Factfulness "
  },

db.Book.remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  })]
