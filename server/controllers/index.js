var models = require('../models');
var bluebird = require('bluebird');


var userFields = ['username'];
var messageFields =['message', 'username','roomname']


module.exports = {
  messages: {//calling models
    get: function (req, res){
      //send res


        models.messages.get(function(err,results){
          res.json(results);
        });
        res.end();
      }
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post();
      req.end()
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get();
      res.end();
    },
    post: function (req, res) {
      models.users.post();
      req.end();
    }
  },

  room: {
    get: function (req, res){
      models.room.get();
      res.end();
    },

    post: function(req,res) {
      models.room.post();
      req.end();
    }
  }
};

