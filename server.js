const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodeMailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.listen(3300, () => {
    console.log("the server is started on port 3300");
});

app.post('/sendmail', (req, res) => {
    console.log("request came");
    let user = req.body;

    const mailOptions = {
        from: `${user.emailField}`,
        to: "kuldeep@github.com",
        subject: `${user.subjectField}`,
        html: `<h1>Name: ${user.nameField}</h1><p>Message: ${user.messageField}</p>`
    };

    sendmail(mailOptions, (err, info) => {
        if (err) {
            console.log("error from server", err);
            res.status(400);
            res.send({ error: "Failed to send mail" })
        } else {
            console.log("email has been sent");
            res.send(info);
        }
    });
    
});

const transporter = nodeMailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "d21ff40b5b7d80",
        pass: "ebcdb04cdc19cd"
    }
});

const sendmail = (options, callback) => {
    transporter.sendMail(options, callback);
}