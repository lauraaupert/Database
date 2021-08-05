const { v4: uuidv4 } = require('uuid');
const params = fileName => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];
  
    const imageParams = {
        //fill in bucket name
      Bucket: "client-invoices-",
      Key: `${uuidv4()}.${fileType}`,
      Body: fileName.buffer,
      ACL: 'public-read'
    };
  
    return imageParams;
  };

  module.exports = params;