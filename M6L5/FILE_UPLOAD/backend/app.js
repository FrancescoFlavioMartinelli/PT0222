const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");

const app = express();
app.use(cors()); //abilita accessi da cross origin
app.use(express.json());

//Cloudinary
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: "***",
    api_key: "***",
    api_secret: "***"
});



//File upload
const multer = require("multer");
//DISK SOTRAGE
// const storage = multer.diskStorage({
//     destination: (req, file, cb)=>{
//         //posizione in cui salvare
//         cb(null, "./Uploads")
//     },
//     filename: (req, file, cb)=>{
//         console.log("multer file:",file);
//         cb(null, file.fieldname + ".png");
//     }
// })
//CLOUDINARY STORAGE
const storage=new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'uploads',
      format: async (req, file) => 'png', // supports promises as well
      public_id: (req, file) => file.filedname,
    },
  });

const upload = multer({storage: storage})
// const upload = multer({ dest: './Uploads' })


app.post("/upload", upload.single("uploadImage"), (req, res)=>{
    console.log("UPLOAD")
    console.log(req.file)
    res.json({upload: req.file.path})
})


app.get("/test", (req, res)=>{
    console.log("TEST");
})




mongoose.connect("mongodb+srv://flavio:Mvats8GJ7OzC7NYM@pt02.gflnadk.mongodb.net/M6L4").then(res=>{
    console.log("DB connected");
    app.listen(3001, ()=>{
        console.log("Server is listening on port 3001");
    })
})