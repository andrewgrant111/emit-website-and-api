var nodemailer = require('nodemailer');

var router = express.Router();
app.use('/sayHello', router);
router.post('/contact', handleSayHello);

function handleSayHello(req, res) {
    var transporter = nodemailer.createTransport('SMTP' {
        host: 'smtp.emitcare.ca',
        port: 25, // need port
        secure: true, // use SSL
        auth: {
            user: 'info@emitcare.ca', // Your email id
            pass: 'password' // Your password
        }
    });
    
    var text = 'Hello world from \n\n' + req.body.name;
    
    var mailOptions = {
        from: req.body.name + ' &lt;' + req.body.email + '&gt;', // sender address
        to: 'info@emitcare.ca', // list of receivers
        subject: 'EMIT Contact Form', // Subject line
        text: req.body.message
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.json({yo: 'error'});
        }else{
            console.log('Message sent: ' + info.response);
            res.json({yo: info.response});
        };
    });
}