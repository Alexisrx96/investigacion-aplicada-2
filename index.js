const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');
const routesApi = require('./routes-api');
const app = express();
// Settings
app.set('appName', 'Mi primer server');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('json spaces', 2);


//Middlewares
app.use(morgan('combined')); 
app.use(express.urlencoded({extended : false}));
app.use(express.json());
//routes
app.use(routes);
app.use('/api', routesApi);
app.get('*', (req, res)=> {
    res.end('Error 404: File not found');
});

//listen
app.listen(3000, ()=> {
    console.log('server on port 3000');
});