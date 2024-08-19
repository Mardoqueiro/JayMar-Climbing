import express from 'express'
import bodyParser from 'body-parser'
import { products } from '../model/index.js'
// import { verifyAToken } from '../middleware/AuthenticateUser.js'

const productRouter = express.Router()

productRouter.use(bodyParser.json())
// verifyAToken,
productRouter.get('/',  (req, res) => {
    products.fetchProducts(req, res)
})

productRouter.get('/recent', (req, res) => {
    products.recentProducts(req, res)
})
// verifyAToken,
productRouter.get('/:id', (req, res) => {
    products.fetchProduct(req, res)
})
// verifyAToken,
productRouter.post('/add', (req, res) => {
    products.addProduct(req, res)
})
// verifyAToken,
productRouter.patch('/:id', (req, res) => {
    products.updateProduct(req, res)
})
// verifyAToken,
productRouter.delete('/:id', (req, res) => {
    products.deleteProduct(req, res)
})

export {
    productRouter
}
