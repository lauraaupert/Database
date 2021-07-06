var Customer = require("../models/customer");
var Product = require("../models/product");
var Job = require("../models/job");
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
  router.post("/api/products", function(req, res) {
    Product.create(req.body)
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

  router.post("/api/jobs", function(req, res) {
    Job.create(req.body)
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

  // router.put("/api/customers/:id", ({ params, body }, res) => {
  //   Customer.findOneAndUpdate(
  //     { _id: params.id},
  //     {$push: { county: body }},
  //     updatedCustomer => {
  //       res.json(updatedCustomer);
  //     }
  //     )
  // })

  router.put("/api/customers", function(req, res) {
    Customer.findOneAndUpdate(res.data, req.body)
    .then(console.log(req.data))
  })

  // app.put("/api/workouts/:id", (req, res) => {
  //   var workoutID = req.params.id;
  //   db.Exercise.create(req.body)
  //     .then(({ _id }) =>
  //       db.Workout.findOneAndUpdate(
  //         { _id: workoutID },
  //         { $push: { exercises: _id } },
  //         { new: true }
  //       )
  //     )
  //     .then((dbWorkout) => {
  //       res.json(dbWorkout);
  //     })
  //     .catch((err) => {
  //       res.json(err);
  //     });
  // });


  router.get("/api/customers", function(req, res) {
    Customer.find({}).then(data => res.json(data))
    
      // res.json(
      //   {
      //     name: req.name
      //   }
      // )
  });
  router.get("/api/products", function(req, res) {
    Product.find({}).then(data => res.json(data))
    
      // res.json(
      //   {
      //     name: req.name
      //   }
      // )
  });

  // router.post("/api/customers/:id"), function(req,res) {
  //   var custID = req.params.id;

  //   Customer.findOneAndUpdate(
  //     // res.data.lastName, req.body)
  //     { lastName: lastName },
  //       { $push: { county: req.body.county } 
  //     })
      
  //     .catch(err => {
  //       console.error(err);
  //     });
  // // });
  // //   .then(console.log(req.data))
  // }

  router.post("/api/products"), function(req,res) {
    Product.findOneAndUpdate(res.data.name, req.body)
    .then(console.log(req.data))
  }

router.delete('/api/products', (req, res, next) => {
    Product.deleteOne({code: req.params.code}).then(
      () => {
        res.status(200).json({
          message: 'Deleted!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  });
  router.get("/api/products", function(req, res) {
    Product.find({}).then(data => res.json(data))
    
      // res.json(
      //   {
      //     name: req.name
      //   }
      // )
  });

  module.exports = router;
