const express = require('express');
const router = express.Router();
const AWS = require("aws-sdk");
const awsConfig = {
  region: "us-east-2",
  // endpoint: "http://localhost:8000",

};
AWS.config.update(awsConfig);
const dynamodb = new AWS.DynamoDB.DocumentClient();
const table = "Customers";

router.get('/api/customers', (req, res) => {
    const params = {
      TableName: table
    };
    // Scan return all items in the table
    dynamodb.scan(params, (err, data) => {
      if (err) {
        res.status(500).json(err); // an error occurred
      }else {
        res.json(data.Items)
      }
    });
  })

  // get thoughts from a user
router.get('/api/customers/:lastname', (req, res) => {
    console.log(`Querying for thought(s) from ${req.params.lastname}.`);
    const params = {
      TableName: table,
      ProjectionExpression: "#ca, #ln, #fn, #em, #cp, #hp, #rf, #ct, #ad, #jo",
      KeyConditionExpression: "#ln = :lastname",
      ExpressionAttributeNames: {
        "#ca": "createdAt",
        "#ln": "lastname",
        "#fn": "firstname",
        "#em": "email",
        "#cp": "cellphone",
        "#hp": "homephone",
        "#rf": "referral",
        "#ct": "county",
        "#ad": "address",
        "#jo": "jobs"
      },
      ExpressionAttributeValues: {
        ":lastname": req.params.lastname
      }
    };
    dynamodb.query(params, (err, data) => {
      if (err) {
        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        res.status(500).json(err); // an error occurred
      } else {
        console.log("Query succeeded.");
        res.json(data.Items)
      }
    });
  });

  // Create new user
router.post('/api/customers', (req, res) => {
    const params = {
      TableName: table,
      Item: {
        "createdAt": Date.now(),
        "lastname": req.body.lastname,
        "firstname": req.body.firstname,
        "email": req.body.email,
        "cellphone": req.body.cellphone,
        "homephone": req.body.homephone,
        "referral": req.body.referral,
        "county": req.body.county,
        "address": req.body.address,
        "jobs": req.body.jobs,
      }
    };
    dynamodb.put(params, (err, data) => {
      if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        res.status(500).json(err); // an error occurred
      } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
        res.json({"Added": JSON.stringify(data, null, 2)});
        console.log("Added item:", JSON.stringify(data, null, 2));

      }
    });
  });

  router.put('/api/customers', (req, res) => {
    const params = {
      TableName: table,
      Key: {
        //only partition key and sorting keys are needed
        "lastname": req.body.lastname,
        "createdAt": req.body.createdAt,
      },
      UpdateExpression: "set jobs = :jo",
      //set email = :em, set cellphone = :cp, set homephone = :hp, set referral = :rf, set county = :ct, set address = :ad,
      ExpressionAttributeValues: {
        ":jo": req.body.jobs
      }
    };
    console.log(params)
    dynamodb.update(params, (err, data) => {
      if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        res.status(500).json(err); // an error occurred
      } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
        res.json({"Added": JSON.stringify(data, null, 2)});
        console.log("Added item:", JSON.stringify(data, null, 2));

      }
    });
  });

  module.exports = router;