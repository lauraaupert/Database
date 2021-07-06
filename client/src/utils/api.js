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
saveJob: function (jobID, customerID, date, jobType, quantity, total) {
  console.log(jobID, customerID, date, jobType, quantity, total)
  return axios.post('/api/jobs', {
      jobID: jobID,
      customerID: customerID, 
      date: date, 
      serviceList: {
        type: jobType, 
        quantity: quantity,
        total: total
      }
  });
},
// addJob: function(req, res) {
//   return axios.put("/api/customers", {

//   })
// },


  getCustomers: function () {
    return axios.get('/api/customers');
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
    updateCustomer: function (id, customerID, firstName, lastName, cellPhone, homePhone,
       email, county, 
       line1, line2, city, state, zip) {
      return axios.put("/api/customers", 
       { _id: id, 
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
