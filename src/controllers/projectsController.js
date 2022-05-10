const {getProjects} = require('../data');

module.exports = {
    getAll: (req, res) => {
        res.set({'content-type':'text/plain;charset=utf-8'})
        getProjects.forEach(product => {
            res.write(`************\n`)
            res.write(`Emprendimiento: ${product.name}\n\n`)
        })
        res.end()
    },

    getOne: (req, res) => {
        res.set({'content-type':'text/plain;charset=utf-8'})
        let idProject = +req.params.id;
        let project = getProjects.find((project) => project.id === idProject);
        res.write(`Emprendimiento: ${project.name}`)

        res.end()
    }
}
