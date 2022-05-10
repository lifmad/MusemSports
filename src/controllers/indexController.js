/* let controller = {}
module.export = controller  // Es lo mismo que el module export de abajo */

const path = require("path");
const { getProducts } = require("../data");

module.exports = {
    index :  (req, res) => {
        res.render('index', {
            titulo: "Homepage",
            productos: getProducts
        })
    },
    contact :  (req, res) => res.send('Contacto')
}