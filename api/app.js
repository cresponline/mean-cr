var express         = require('express'),
    app             = express(),
    bodyParser      = require('body-parser'),
    methodOverride  = require('method-override');

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var ExampleCtrl = require('./controllers/example');

var router = express.Router();
router.get('/', function(req, res) {
  res.status(404);
});
app.use(router);

// API routes
var example = express.Router();

example.route('/list')
  .get(ExampleCtrl.findAll);

example.route('/list/:id')
  .get(ExampleCtrl.findById);

app.use('/example', example);

// Start server
app.listen(3000, function() {
  console.log('Node server running on http://localhost:3000');
});
