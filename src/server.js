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

app.get('/contacto.html', (req, res) => {
  res.sendFile('contacto.html', { root: __dirname + '/public' });
});

app.listen(app.get('port'),()=>{
  console.log('Server online 0.2');
})



/* CAPCHA DE GOOGLE */

const axios = require('axios');
const siteKey = '6Lc-KnUmAAAAADO9Z_BUo8ez4gKHmwvyPt6cBhCP';
const secretKey = 'KnUmAAAAABkkE17vUjXeOYNPpvnvVjnhNWVk';

app.post('/verificar-captcha', (req, res) => {
  const captchaToken = req.body.token;

  axios
    .post('https://www.google.com/recaptcha/api/siteverify', null, {
      params: {
        secret: secretKey,
        response: captchaToken,
      },
    })
    .then(response => {
      const { success } = response.data;

      if (success) {
        // El CAPTCHA se verificó correctamente, puedes continuar con el proceso
        res.send('CAPTCHA verificado correctamente');
      } else {
        // El CAPTCHA no se verificó correctamente, toma las medidas adecuadas
        res.send('CAPTCHA no válido');
      }
    })
    .catch(error => {
      // Ocurrió un error al verificar el CAPTCHA
      console.error('Error al verificar el CAPTCHA:', error);
      res.status(500).send('Error al verificar el CAPTCHA');
    });
});