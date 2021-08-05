import axios from 'axios';

export default {

saveCustomer: function (customerID, firstName, lastName, 
    cellPhone, homePhone, email, referral, county, confirmed,
     line1, line2, city, state, zip) {
    console.log(firstName, email, city, cellPhone)
    return axios.post('/api/customers', {
        customerID: customerID, 
        firstName: firstName, 
        lastName: lastName, 
        cellPhone: cellPhone,
        homePhone: homePhone,
        email: email,
        referral: referral,
        county: county,
        confirmed: confirmed,
        address: {
            line1: line1,
            line2: line2,
            city: city,
            state: state,
            zip: zip
        }
    });
  },
  saveProduct: function (group, name, code, price) {
    console.log(group, name, code, price)
    return axios.post('/api/products', {
        group: group, 
        name: name, 
        code: code, 
        price: price
    }
    )
},
saveJob: function (curr_id, jobID, customerID, date, product, quantity, total) {
  console.log(curr_id, jobID, customerID, date, product, quantity, total)
  return axios.post('/api/jobs', {
      curr_id: curr_id,
      jobID: jobID,
      customerID: customerID, 
      date: date, 
      serviceList: {
        type: product, 
        quantity: quantity,
        total: total
      }
  });
},
// addJob: function(req, res) {
//   return axios.put("/api/customers", {

//   })
// },
getJobs: function () {
  return axios.get('/api/jobs');
},


  getCustomers: function () {
    return axios.get('/api/customers')
    // .then(.populate("jobs").console.log(res);)
    
  },
  getProducts: function () {
    return axios.get('/api/products');
  },
  setLocation: function (name, latitude, longitude) {
    return axios.put("/api/friends", 
    { name: name , 
     latitude: latitude,
     longitude: longitude })
  },
  // updateCustomer: function (id, lastName, county) {
  //   return axios.put("/api/customers/" + id, 
  //    { _id: id },
  //    {$push: {county: county} }
  //   )},

  //DONT TOUCH THIS
  linkJob: function(curr_id, job_id) {
    return axios.put("api/customers", {
      _id: curr_id,
      $push: {jobs: job_id},
    }
    )
  },
  
    updateCustomer: function (id, 
      customerID, firstName, lastName, cellPhone, homePhone,
       email, 
       county, 
       line1, line2, city, state, zip
       ) {
      return axios.put("/api/customers", 
       { _id: id, 
        $set: {
        customerID: customerID, 
        firstName: firstName, 
        lastName: lastName, 
        cellPhone: cellPhone,
        homePhone: homePhone,
        email: email,
        county: county,
        address: {
            line1: line1,
            line2: line2,
            city: city,
            state: state,
            zip: zip
          }
        } 
      }
      )},
  getCustomer: function (search) {
    return axios.get('/api/customers', search);
  },
  getProduct: function (productName) {
    return axios.get('/api/products', productName);
  },
//   updateProduct: function (group, name, code, price) {
//       return axios.put("/api/products", {
//       group: group, 
//       name: name, 
//       code: code, 
//       price: price
//       }
//       )
//   }
  deleteProduct: function (code) {
      return axios.delete("/api/products", code)
  }
// Tutorial.findByIdAndRemove(id)
// .then(data => {
//   if (!data) {
//     res.status(404).send({
//       message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
//     });
//   } else {
//     res.send({
//       message: "Tutorial was deleted successfully!"
//     });
//   }
// })
// .catch(err => {
//   res.status(500).send({
//     message: "Could not delete Tutorial with id=" + id
//   });
// });
// };


}
