let express = require('express');
let path = require('path');

let indexRouter = require('./app_server/routes/index');
//let usersRouter = require('./app_server/routes/users');
let travelRouter = require('./app_server/routes/travel');
let apiRouter = require('./app_api/routes/index');
let handlebars = require('hbs');

require('./app_api/models/db');

let app = express();

app.set('views', path.join(__dirname, 'app_server', 'views'));
handlebars.registerPartials(__dirname + '/app_server/views/partials');
app.set('view engine', 'hbs');

// serve static files from app_server/routes
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/travel', travelRouter);
app.use('/api', apiRouter);



// start server
app.listen(3000, function () {
  console.log('Server running on http://localhost:3000');
});
