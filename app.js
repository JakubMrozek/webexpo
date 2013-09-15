var express = require('express');
var app = express();

app.configure(function(){
  app.engine('.html', require('ejs').__express);
  app.set('view engine', 'html');
  app.set('views', __dirname + '/views');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(process.cwd() + '/app'));
  app.use(express.favicon());
  app.use(express.cookieParser());
  app.use(app.router);
});


/**
 * Render layout.
 * @param {String} template
 * @return {Function}
 */

function render(template) {
  template = template || 'layout';
  return function(req, res) {
    res.render(template, {
      env: app.settings.env
    });
  }
}

//app.get('/', render());
app.get('/import', render());

module.exports = app;
