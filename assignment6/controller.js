const apiKey="Basic " + new Buffer('9a86a35217185b745506196eb27709a0' + ":").toString("base64");
const url1="https://api.createsend.com/api/v3.1/clients";
const request = require('request');
exports.getClient = function(req, res) {
  console.log("hello");
  request.get(
    {
      url: url1 + ".json",
      headers: {
        'Authorization': apiKey
      }  
    },
    function(error,response, body) {
      if (error) 
        res.send(error);
      res.send(body);
  }); 
}
exports.getClientId = function(req, res) {
  request.get(
    { 
      url: url1 + "/:" + req.params.clientId + ".json",
      headers: {
        'Authorization': apiKey
      }
    },
    function(error,response, body) {
      if (error) 
        res.send(error);
      res.send(body);
  }); 
}
exports.createClient = function(req, res) {
  request.get(
    {
      url: url1 + "/:" + req.params.clientId + ".json",
      headers: {
        'Authorization': apiKey
      },
      body : JSON.stringify(req.body)
    },   
    function(error,response, body) {
      if (error) 
        res.send(error);
      res.send(body);
  }); 
}
exports.deleteClient = function(req, res) {
  request.delete(
    {
      url: url1 + "/:" + req.params.clientId + ".json" ,
      headers: {
        'Authorization': apiKey
      }
    },
    function(error,response, body) {  
      if (error) 
        res.send(error);
      res.delete(response+body);
    }) ;
}
exports.getLists = function(req, res) {
  request.get(
    {
      url: url1 + "/:" + req.params.clientId + "/lists.json" ,
      headers: {
        'Authorization': apiKey
      }
    } , 
    function(error,response, body) {
      if (error) 
        res.send(error);
      res.send(response + body);
  }); 
}