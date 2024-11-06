var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: 'your-email@gmail.com', pass: 'your-password' }
});

transporter.sendMail({
    from: 'Test@gmail.com',
    to: 'Test@gmail.com',
    subject: 'Test',
    text: 'Test'
}, function (error, info) {
    console.log(error ? error : 'Email sent: ' + info.response);
});
