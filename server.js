var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var morgan = require('morgan');
var cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');


dotenv.config({path:'./config/config.env'});

var transport={
  service: 'gmail',
  auth:{
    user: process.env.USER,
    pass: process.env.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error,success)=>{
  if(error){
    console.log(error);
  }
  else{
    console.log("Server is ready to take messages");
  }
});

router.post('/send',(req,res,next)=>{
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var subject = req.body.subject
  var content = `Name: ${name} \n Email: ${email} \n Subject: ${subject} \n Message: ${message}  `

  var mail = {
    from: name,
    to: process.env.USER,  // Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail,(err,data)=>{
    if(err){
      res.json({
          status: 'fail'
      })
    }
    else{
      res.json({
        status: 'success'
      })
    }
  })
})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/',router)
app.listen(3002)

if(process.env.NODE_ENV==='development'){
  app.use(morgan('dev'));
}

if(process.env.NODE_ENV==='production'){
  app.use(express.static('client/build'));

  app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,'client','build','index.html')));
}

