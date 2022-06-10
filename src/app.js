const express = require('express');
const { readdirSync } = require('fs');
const path = require('path');
const app = express();
const process = require('process');
require('dotenv').config()
const PORT = process.env.PORT || 3000;
const methodOverride = require('method-override');
const multer = require('multer');


/*   Enrutadores    */
const indexRouter = require('./routes/indexRouter');
const productsRouter = require('./routes/productsRouter');
const projectsRouter = require('./routes/projectsRouter');
const usersRouter = require('./routes/usersRouter');
const adminRouter = require('./routes/adminRouter');


app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));

/*    Views setup    */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* app.get('/', (req, res) => {res.sendFile(path.join(__dirname, '/views/index.html'))}); */
/* app.get('/productDetail', (req, res) => {res.sendFile(path.join(__dirname, '/views/productDetail.html'))}); */

/*     MiddLewares Rutas    */
app.use('/', indexRouter); //Home - Contact
app.use('/productos', productsRouter);  //Listado, detalles
app.use('/emprendimientos', projectsRouter);  // Proyectos - Emprendimientos
app.use('/usuarios', usersRouter);  // Proyectos - Emprendimientos
app.use('/admin', adminRouter);  // Admin, ABM Productos, ABM Proyectos
/* app.get('/productCart', (req, res) => {res.sendFile(path.join(__dirname, '/views/productCart.html'))});
app.get('/login', (req, res) => {res.sendFile(path.join(__dirname, '/views/login.html'))});
app.get('/register', (req, res) => {res.sendFile(path.join(__dirname, '/views/register.html'))}); */

app.listen(PORT, () => console.log(`
Server listen port ${PORT}
http://localhost:${PORT}`));