const methods = require('../helpers/methods');
const axios =  require("axios");
const stringify = require('json-stringify-safe');

// get all users from the database(demo db using json server)
exports.allUsers = async function (_req, res) {
  axios.get('http://localhost:3000/users')
    .then(response => {
      var circularObj = {};
      circularObj.circularRef = response;
      circularObj.list = [ circularObj, circularObj ];
      res.send({data: JSON.parse(stringify(circularObj.circularRef.data, null, 2))});
    })
    .catch(error => {
      res.send(methods.failResponse('server_error', error));
    });
};