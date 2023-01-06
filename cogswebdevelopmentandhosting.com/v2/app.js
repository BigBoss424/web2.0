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
app.post('/contact/send', function(req, res){
    var transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: 'rsaiyan4444@gmail.com',
            pass: 'Efr4932!1'
        }
    });

    var mailOptions = {
		from: 'Aaron Jones <rsaiyan4444@gmail.com>',
		to: 'ajones061392@yahoo.com',
		subject: 'Website Submission',
		text: 'You have a submission with the following details... Name: '+req.body.name+'Email: '+req.body.email+'Message: '+req.body.message,
		html: '<p>You have a submission with the following details...</p><ul><li>'+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>'
	};

	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			console.log(error);
			res.redirect('/');
		} else {
			console.log('Message Sent: '+info.response);
			res.redirect('/');
		}
        
    });

    var mailOptions = {
        from: 'Aaron Jones <ajones061392@yahoo.com>',
        to: 'rsaiyan4444@gmail.com',
        subject: 'Website Submission',
        text: 'You have a website submission with the following details... Name: ' +
            req.body.name+'Email: '+req.body.email+'Message: '+req.body.message,
        html: '<p>You have a submission with the following details...</p><ul><li>'+req.body.name+'</li><li>Email: '+req.body.email+'<li><li>Message: '+req.body.message+'</li></ul>'
    };//end contact 


});
