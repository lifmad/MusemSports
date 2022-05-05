/* let controller = {}
module.export = controller  // Es lo mismo que el module export de abajo */

const path = require("path");

module.exports = {
    index :  (req, res) => res.send('homepage'),
    contact :  (req, res) => res.send('Contacto')
}