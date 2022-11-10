const express = require('express')
const app = express()
const path = require('path')
const Product = require('./models/Product.model')

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

require('./db/0_ddbb-conection')

app.get('/', (req, res) => {
    res.render('index-page')
})

app.get('/shop-page', (req, res) => {
    // res.send('holi')
    Product
        .find()
        .sort({ price: 1 })
        .select({ title: 1, thumbnail: 1, price: 1 })
        .then(allProducts => {
            res.render('shop-page', { products: allProducts })
        })
        .catch(err => console.log(err))
})

app.listen(3000, () => console.log('🏃‍ on port 3000'));


