var express = require('express');
const lego = require('./Lego.json');
const path = require('path');
var app = express(); 
var cors = require('cors');

app.use(cors());

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function (req, res) {
  res.render('index',{
   title: 'Mi è semblato di vedere un gatto!',
   costruzioni: lego.Istruzioni
 });
});

app.get('/costruzione', (req, res) => {
  const giochi = lego.Istruzioni.find((p) => p.id == req.query.id);
  console.log(giochi);
  res.render('costruzione', {
    title: ` ${giochi.SetName} ${giochi.SetNumber}`,
    giochi,
  });
});

app.get('/api/costruzione',function(req,res){
 res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(lego));
});


const port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port,  () => {console.log('Example app listening on port 3000!');});

