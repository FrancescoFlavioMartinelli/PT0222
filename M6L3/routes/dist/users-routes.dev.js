"use strict";

var express = require('express');

var router = express.Router(); //middlewares

var debug = require("../middlewares/debug"); //Models


var Users = require("../models/Users");

router.get('/users', debug.method, function _callee(req, res) {
  var query, sortParams, limit, skip, u;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = req.query;
          sortParams = {};
          if (req.query.age) sortParams.age = req.query.age == "asc" ? 1 : -1;
          if (req.query.name) sortParams.name = req.query.name == "asc" ? 1 : -1; // const page = req.query.page ? req.query.page : 1

          limit = req.query.size ? req.query.size : 50;
          skip = (req.query.page ? req.query.page : 1) - 1 * limit;
          console.log("user api");
          _context.next = 9;
          return regeneratorRuntime.awrap(Users.find().sort(sortParams).limit(limit).skip(skip));

        case 9:
          u = _context.sent;
          res.status(200).json(u);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
}); // router.get('/users/:id', async (req, res)=>{
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

router.get('/users/age', debug.method, function _callee2(req, res) {
  var order, u;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          order = req.query.order; //le query non sono indicate nella rotta (possono essere su qualunque rotta)

          console.log("Order", order);
          if (!order) order = "asc";
          console.log("user api");
          _context2.next = 6;
          return regeneratorRuntime.awrap(Users.find().sort({
            age: order == "asc" ? 1 : -1
          }));

        case 6:
          u = _context2.sent;
          res.status(200).json(u);

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  });
}); //RESTO DELLA CRUD

router.post('/users', function _callee3(req, res) {
  var body, u;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log("user api");
          body = req.body;
          u = new Users({
            name: body.name,
            age: body.age,
            address: {
              city: body.address.city,
              state: body.address.state
            },
            contacts: body.contacts
          });
          _context3.next = 5;
          return regeneratorRuntime.awrap(u.save());

        case 5:
          res.status(201).json(u);

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  });
});
router.put('/users/:id', function _callee4(req, res) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          console.log("user api");
          res.status(300);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  });
});
router["delete"]('/users/:id', function _callee5(req, res) {
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          console.log("user api");
          res.status(300);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  });
});
module.exports = router;