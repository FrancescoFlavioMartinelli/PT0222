const express = require('express')
const router = express.Router()

//middlewares
const debug = require("../middlewares/debug")

//Models
const Users = require("../models/Users")

router.get('/users', debug.method, async (req, res)=>{
    const query = req.query
    let sortParams = {}
    if(req.query.age) sortParams.age = req.query.age == "asc" ? 1 : -1
    if(req.query.name) sortParams.name = req.query.name == "asc" ? 1 : -1
    
    // const page = req.query.page ? req.query.page : 1
    const limit = req.query.size ? req.query.size : 50
    const skip = ((req.query.page ? req.query.page : 1) - 1) * limit

    console.log("page", limit, req.query.page, skip);


    console.log("user api");
    const u = await Users.find().sort(sortParams).limit(limit).skip(skip);
    res.status(200).json(u)
})

// router.get('/users/:id', async (req, res)=>{
//     const id = req.params.id
//     try {
//         const u = await Users.findById(id)
//         return res.status(200).json(u)
//     } catch(err) {
//         console.log("ERRORE");
//     }
//     return res.status(404).send("ERRORE")
// })

// router.get("/users/id/:id", async (req, res)=>{
//     const id = req.params.id;
//     try {
//         const u = await Users.findOne({_id: id})
//         console.log(u);
//         return res.status(200).json(u)
//     } catch(err) {
//         console.log("ERRORE");
//     }
//     return res.status(404).send("ERRORE")
// })

// router.get("/users/name/:name", async (req, res)=>{
//     const name = req.params.name;
//     try {
//         // const u = await Users.findOne({name: name})
//         const u = await Users.find({name: name, age: 24})
//         console.log(u);
//         return res.status(200).json(u)
//     } catch(err) {
//         console.log("ERRORE");
//     }
//     return res.status(404).send("ERRORE")
// })


router.get('/users/age', debug.method, async (req, res)=>{
    let order = req.query.order //le query non sono indicate nella rotta (possono essere su qualunque rotta)
    console.log("Order", order);
    if(!order) order = "asc"
    console.log("user api");
    const u = await Users.find().sort({age: order == "asc" ? 1 : -1});
    res.status(200).json(u)
})











//RESTO DELLA CRUD
router.post('/users', async (req, res)=>{
    console.log("user api");
    const body = req.body
    const u = new Users({
        name: body.name,
        age: body.age,
        address: {
            city: body.address.city,
            state: body.address.state
        },
        contacts: body.contacts
    })

    await u.save()

    res.status(201).json(u)
})
router.put('/users/:id', async (req, res)=>{
    console.log("user api");
    res.status(300)
})
router.delete('/users/:id', async (req, res)=>{
    console.log("user api");
    res.status(300)
})

module.exports = router