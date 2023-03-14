const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));

app.listen(3000);
app.set('views', path.join(__dirname, 'views'));

//Set the view engine
app.set('view engine', 'pug');

app.get('/', function(req, res){
    res.render('index');
});

app.get('/about', function(req, res){
    res.render('about');
});

app.get('/contact', function(req, res){
    res.render('contact');
});

app.get('/services', function(req, res){
    res.render('services');
});

app.get('/faqs', function (req, res){
    res.render('faqs');
});

app.get('/features', function(req, res){
    res.render('features');
});

app.get('/pricing', function(req, res){
    res.render('pricing');
});


