const express = require('express');
const path = require('path');
const app = express();
const process = require('process');
require('dotenv').config()
const PORT = process.env.PORT || 3000;


/*   Enrutadores    */

const indexRouter = require('./routes/indexRouter');
const productsRouter = require('./routes/productsRouter');
const projectsRouter = require('./routes/projectsRouter');

app.use(express.static(path.join(__dirname, '../public')));

/*    Views setup    */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* app.get('/', (req, res) => {res.sendFile(path.join(__dirname, '/views/index.html'))}); */
/* app.get('/productDetail', (req, res) => {res.sendFile(path.join(__dirname, '/views/productDetail.html'))}); */

/*     MiddLewares Rutas    */
app.use('/', indexRouter); //Home - Contact
app.use('/productos', productsRouter);  //Listado, detalles
app.use('/emprendimientos', projectsRouter);  // Proyectos - Emprendimientos
/* app.get('/productCart', (req, res) => {res.sendFile(path.join(__dirname, '/views/productCart.html'))});
app.get('/login', (req, res) => {res.sendFile(path.join(__dirname, '/views/login.html'))});
app.get('/register', (req, res) => {res.sendFile(path.join(__dirname, '/views/register.html'))}); */

app.listen(PORT, () => console.log(`
Server listen port ${PORT}
http://localhost:${PORT}`));