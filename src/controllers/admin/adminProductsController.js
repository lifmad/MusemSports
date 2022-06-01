const {getProducts} = require('../../data');

module.exports = {

    /*  Envia la vista de listado de productos  */
    list: (req, res) => {
        res.render('admin/products/listProducts', {
            title: 'Listado de productos',
            productos: getProducts
        })
    },

    /*  Envia la vista de formulario de creacion de productos  */
    productAdd: (req, res) => {
        res.render('admin/products/addProduct', {
            title: "Agregar producto"
        })
    },

    /*  Recibe los datos del form de creacion y guarda el producto en la DB  */
    productCreate: (req, res) => {

    },

    /*  Envia la vista de formulario de edicion de producto  */
    productEdit: (req, res) => {

    },

    /*  Recibe los datos actualizados del form de edicion  */
    productUpdate: (req, res) => {

    },

    /*  Recibe el producto a eliminar  */
    productDelete: (req, res) => {

    },

    /*  Recibe los datos del producto a buscar  */
    productSearch: (req, res) => {

    }
}