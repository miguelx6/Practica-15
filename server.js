//instalamos los paquetes necesarios para esta practica tal como son el: express, nodemon y init -y
const express = require('express');
let app = express();
//este es el localhost y siempre se usa el 3000 no se por que la verdad
let PORT = process.env.PORT || 3000;
app.use('/assets', express.static(__dirname + '/public'));
//colocamos este app use para que nos de la llegada a la pagina de localhost
app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');
//aqui usamos el codigo de la practica 14 para supongo tener un referencia que lo de debe aparecer solo con poner el localhost300
app.get('/', function (req, res){
   res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/assets/style.css" type="text/css">
        <title>Document</title>
    </head>
    <body>
        <h1>Hola Mundo</h1>
        <p>Uso este espacio publicitario para decirle a mi ama que ya estoy aprendiendo a programar y que no me lleve a chambiar en semana santa y pascua</p>
    </body>
    </html>`)
  });
//aqui colocamos esta rama para poder llegar al formulario que hicimos en ejs y que nos de un respuesta al back y front end
  app.get('/student',(req, res) =>{
    res.render('student', {});

});
//renderizamos la respuesta que debe dar el formulario con lo que le pongamos y eso lo hicimos para que tuviera forma y colo y no 
// se mirara tan pobre y delgado
app.post('/addStudent', function(req, res){
    res.render('displayData', {nombre: req.body.nombre,
                                edad: req.body.edad,
                                nss: req.body.nss,
                                tipoSangre: req.body.tipoSangre});
});
//esto es para poder activar la pagina con el nodemon
app.listen(PORT);