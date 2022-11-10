
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    // _id: {
    //     ObjectID()
    // },

    title: {
        type: String,
        required: true,
        default: 'Unknown title'
    },

    price: {
        type: Number,
    },

    discountPercentage: {
        type: Number
    },

    rating: {
        type: Number
    },

    stock: {
        type: Number
    },

    brand: {
        type: String,
    },

    category: {
        type: String,
    },

    thumbnail: {
        type: String,

    },

    images: {
        type: Array,
    },
})

const Product = mongoose.model("product", productSchema)

module.exports = Product