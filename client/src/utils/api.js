import axios from 'axios';

export default {

saveCustomer: function (customerID, firstName, lastName, 
    cellPhone, homePhone, email, line1, line2, city, state, zip) {
    console.log(firstName, email, city, cellPhone)
    return axios.post('/api/customers', {
        customerID: customerID, 
        firstName: firstName, 
        lastName: lastName, 
        cellPhone: cellPhone,
        homePhone: homePhone,
        email: email,
        address: {
            line1: line1,
            line2: line2,
            city: city,
            state: state,
            zip: zip
        }
    });
  },
  getCustomers: function () {
    return axios.get('/api/customers');
  },
  setLocation: function (name, latitude, longitude) {
    return axios.put("/api/friends", 
    { name: name , 
     latitude: latitude,
     longitude: longitude })
  },
  geocode: function(address) {
    return axios.get(
      "http://api.positionstack.com/v1/forward?access_key=" + process.env.REACT_APP_GEOKEY +
      "&query=" + address 
      )
  },
  getCustomer: function (search) {
    return axios.get('/api/customers', search);
  },

}
