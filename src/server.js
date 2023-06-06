var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackConfig = require('../webpack.config');

/* Settings */

var app = express();
app.set('port',(process.env.PORT || 3000));
app.use('/static', express.static('dist'));
app.use(webpackDevMiddleware(webpack(webpackConfig)));

app.get('/',function(req,res,next){
  res.send('Funciona correctamente');
})

app.listen(app.get('port'),()=>{
  console.log('Server online 0.1');
})