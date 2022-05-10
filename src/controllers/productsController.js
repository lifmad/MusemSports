const {getProducts} = require('../data');


module.exports = {

    getAll : (req, res) => {
        res.set({'content-type':'text/plain;charset=utf-8'})
        getProducts.forEach(product => {
            res.write(`
            **********
            ${product.name}
            ${product.price}
            ${product.description}
            ${product.discount}\n`)
        });
        
        res.end()
    },

    getOne : (req, res) => {
        res.set({'content-type':'text/plain;charset=utf-8'})

        let idProduct = +req.params.id;
        let product = getProducts.find((product) => product.id === idProduct);
        res.write(`Detalle de producto`)
        res.write(`Nombre: ${product.name}\n`)
        res.write(`Precio: ${product.price}\n`)
        res.write(`Descripcion: ${product.description}\n`)
        res.write(`Descuento: ${product.discount}\n`)

        res.end()
    }

}