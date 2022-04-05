const mongoose = require("mongoose")
const Schema = mongoose.Schema

const BookSchema = new Schema({
    name: {
        type: String,
        required:[true, "Enter the name"]},
     isbn: {
        type: Number,
        required: [true, "Enter the isbn Number"],
        length: 10
     },
     author: {
         type: String,
         required:[true,"Fill the author"]
     },
     published_date: {
         type: Date,
        required:[true,"Fill the date"]
     },
     price: {
         type: Number,
         required: [true, "Fill the price"]
     }
})

const Book = mongoose.model("Books",BookSchema)
module.exports = Book