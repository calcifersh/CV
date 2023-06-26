const express = require('express');
const webpack = require('webpack');
const nodemailer = require('nodemailer');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config');

/* Settings */

const app = express();
app.set('view engine', 'ejs');
app.set('port',(process.env.PORT || 3000));
app.use(express.static('dist'));
app.use(express.json());
app.use(webpackDevMiddleware(webpack(webpackConfig)));

app.get('/',function(req,res,next){
  res.send('Funciona correctamente');
  res.render('index');
});

app.get('/contacto.html', (req, res) => {
  res.sendFile('contacto.html', { root: __dirname + '/public' });
});

app.get('/sobremi.html', (req, res) => {
  res.sendFile('sobremi.html', { root: __dirname + '/public' });
});

app.listen(app.get('port'),()=>{
  console.log('Server online 0.2');
});

/* FORMULARIO DE CONTACTO */

app.get('/contacto_ok.html', (req, res) => {
  res.sendFile('contacto_ok.html', { root: __dirname + '/public' });
});

app.post('/contacto', (req, res) => {
  const {empresa, email, puesto, textarea} = req.body;
  res.redirect('/contacto_ok.html');
});


/* DESCARGA PDF */

app.get('/dist/pdf/:id', function(req, res){
  res.download(__dirname+'/dist/pdf/'+req.params.id,req.params.id,function(err){
    if(err) {
      console.log(err)
    } else {
      console.log('pdf_ok')
    }
  });
});