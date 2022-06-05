const {getProducts, writeProducts} = require('../../data');

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
        /* 1 - Crear el objeto producto  */
        let lastId = 0;
        getProducts.forEach(product => {
            /* Obtiene el ultimo ID */
            if (product.id > lastId) {
                lastId = product.id
            }
        });

        let newProduct = {
            id: lastId + 1,
            name: req.body.name,
            description: req.body.description,
            price: +req.body.price,
            discount: +req.body.discount,
            image: "image.jpg",
            sport: req.body.sport,
            category: req.body.category
        };

        /*  2 - Guarda el nuevo productu en DB   */
        getProducts.push(newProduct);

        /*  3 - Escribir en el JSON de productos   */
        writeProducts(getProducts);

        /*  4 - Escribir en el JSON de productos   */
        res.redirect('/admin/productos')
    },


    /*  Envia la vista de formulario de edicion de producto  */
    productEdit: (req, res) => {
        /*    1 - Obtener el ID del producto  */
        let idProduct = +req.params.id;

        /*    2 - Buscar el producto a editar  */
        let product = getProducts.find(producto => producto.id === idProduct);

        /*    3 - Mostrar el producto en la vista  */
        res.render('admin/products/editProduct', {
            title: "Editar producto",
            product
        })
    },

    /*  Recibe los datos actualizados del form de edicion  */
    productUpdate: (req, res) => {
        /*    1 - Obtener el ID del producto  */
        let idProduct = +req.params.id;

        /*    2 - Buscar el producto a editar  */
        /*    3 - Modificar el producto  */
        getProducts.forEach(product => {
            if (product.id === idProduct) {
                product.name = req.body.name
                product.description = req.body.description
                product.price = req.body.price
                product.discount = req.body.discount
                /* product.image = req.body.image */
                product.sport = req.body.sport
                product.category = req.body.category
            }
        })
        /*    4 - Guardar los cambios  */
        writeProducts(getProducts)

        /*    5 - Respuesta  */
        res.redirect('/admin/productos')
    },

    /*  Recibe el producto a eliminar  */
    productDelete: (req, res) => {
        /*    1 - Obtener el ID del producto a Eliminar   */
        let idProduct = +req.params.id;

        /*    2 - Buscar el producto dentro del Array y eliminarlo  */
        getProducts.forEach(product => {
            if (product.id === idProduct) {
                //  Obterner la ubicacion (indice) del producto a eliminar
                let productToDeleteIndex = getProducts.indexOf(product);
                //  Elimino el producto del Array
                getProducts.splice(productToDeleteIndex, 1)
            }
        })

        /*    3 - Sobreescribir el JSON  */
        writeProducts(getProducts);

        /*    4 - Enviar respuesta  */
        res.redirect('/admin/productos')
    },

    /*  Recibe los datos del producto a buscar  */
    productSearch: (req, res) => {

    }
}