/*jshint esversion: 2017 */
const express = require('express');
const hbs = require('hbs');
const app = express();

// De esta forma se podra servir lo que esta en la carpeta public
// index.html, home.html...
app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    //     let salida = {
    //         nombre: 'Diego',
    //         edad: 28,
    //         url: req.url
    //     };
    //     res.send(salida);

    //     // res.send('Hola Mundo');
    // });

    // app.get('/data', (req, res) => {
    //     res.send('Hola Data');

    // Handlebars (HBS)
    res.render('home', {
        nombre: 'Diego',
        anio: new Date().getFullYear()
    });
});
app.get('/about', (req, res) => {
    // Handlebars (HBS)
    res.render('about', {
        nombre: 'Diego',
        anio: new Date().getFullYear()
    });
});

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});