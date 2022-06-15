const express = require("express");
const axios =  require("axios");
const stringify = require('json-stringify-safe');
const cors = require('cors'); // requiring cors
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());;
app.use(cors())

const PORT = 3001;

app.get("/getUsers", (req, res) => {
  axios.get('http://localhost:3000/users').then( response => {
    var circularObj = {};
    circularObj.circularRef = response;
    circularObj.list = [ circularObj, circularObj ];
    res.send({data: JSON.parse(stringify(circularObj.circularRef.data, null, 2))});
  }).catch(e=> {
      console.log("error",e)
  })
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});