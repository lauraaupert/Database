var Customer = require("../models/customer");
const router = require("express").Router();

router.post("/api/customers", function(req, res) {
    Customer.create(req.body)
      .then(data => {
        res.status(200).json(data)
        // .redirect("/")
      })
      .catch(function(err) {
          console.log(err)
        res.status(401).json(err)
        // .redirect('/login');
      });
  });

  router.get("/api/customers", function(req, res) {
    Customer.find({}).then(data => res.json(data))
    
      // res.json(
      //   {
      //     name: req.name
      //   }
      // )
  });

  router.post("/api/customers"), function(req,res) {
    Customer.findOneAndUpdate(res.data.name, req.body)
    .then(console.log(req.data))
  }
  
  module.exports = router;
