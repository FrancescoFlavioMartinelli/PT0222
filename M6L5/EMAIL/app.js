const express = require("express");
const mongoose = require("mongoose");

const app = express();

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.API_KEY);

app.post("/compra", async (req, res)=>{
    //compor e creo l'ordine
    const msg = {
        to: 'test@example.com', // Change to your recipient
        from: 'test@example.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      }
      
      try {
          let mail = await sgMail.send(msg)
          console.log(mail);
      } catch(err) {
        
      }
})


mongoose.connect("mongodb+srv://flavio:Mvats8GJ7OzC7NYM@pt02.gflnadk.mongodb.net/M6L4").then(res=>{
    console.log("DB connected");
    app.listen(3001, ()=>{
        console.log("Server is listening on port 3001");
    })
})