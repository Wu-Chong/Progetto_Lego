var express = require('express');
const lego = require('./Lego.json');
var app = express(); 

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
  res.render('index',{
   title: 'Homepage',
   content : 'Questa pagina parla del mondo e di tanto altro',
   costruzioni: lego.Istruzioni
 });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


