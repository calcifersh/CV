const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config');

/* Settings */

const app = express();
app.set('view engine', 'ejs');
app.set('port',(process.env.PORT || 3000));
// app.use('/static', express.static('dist'));
app.use(express.json());
app.use(webpackDevMiddleware(webpack(webpackConfig)));

app.get('/',function(req,res,next){
  res.send('Funciona correctamente');
  res.render('index');
})

app.get('/contacto.html', (req, res) => {
  res.sendFile('contacto.html', { root: __dirname + '/public' });
});

app.get('/sobremi.html', (req, res) => {
  res.sendFile('sobremi.html', { root: __dirname + '/public' });
});

app.listen(app.get('port'),()=>{
  console.log('Server online 0.2');
})



/* FORMULARIO DE CONTACTO */

app.post('/contacto', (req, res) => {
  const {empresa, email, puesto, textarea} = req.body;
  res.redirect('/');
})
