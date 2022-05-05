const {getProducts} = require('../data');


module.exports = {

    getAll : (req, res) => {
        res.set({'content-type':'text/plain;charset=utf-8'})
        getProducts.forEach(product => {
            res.write('************\n')
            res.write(`${product.name}\n`)
            res.write(`${product.price}\n`)
            res.write(`${product.description}\n`)
            res.write(`${product.discount}\n`)
        });
        res.end()
    },
    getOne : (req, res) => {
        let idProduct = req.params.id;
        let colorProducto = req.params.color || "sin especificar";
        res.send(`Detalle de producto: ${idProduct} color: ${colorProducto}`)
    }

}