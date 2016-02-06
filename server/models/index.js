var db = require('../db');
var route = require('../routes.js')


//queries db

module.exports = {
  messages: {//get id,text,username,roomname join models
    //
    get: function(callback){//retrieve all messages
      var string = "select messages.messageID, messages.message from \ messages left outer join users on \
        (messages.userID = users.userID) \
        order by messages.messageID desc";

        var string = "select messages.messageID, messages.message from \ messages left outer join room on \
        (messages.userID = room.roomID) \
        order by messages.messageID desc";

      db.query(string, function(err,data){
        if(err){
          console.log('error')
        }
        callback(data);
      })
    },

     // a function which produces all the messages
    post: function (params, callback) {//store message
        var string = "insert into messages(message, userID, roomID) values (?, (select userID from users where username = ? limit 1), ?)";

        db.query(string, params function(err, data){
        if(err){
          console.log('error');
        }
        callback(data);
      })

    } // a function which can be used to insert a message into the database

  },

  users: {
    // Ditto as above.
    get: function(callback){//fetch users
      db.query('select * from users', function(err,data){
        if(err){
          console.log('error')
        }
        return callback(data);
      })
    },

     // a function which produces all the messages
    post: function (params, callback) {//create user

      db.query('insert into users(username) values(?)', params function(err, data){
        if(err){
          console.log('error');
        }
        return callback(data);
      })
    } // a function which can be used to insert a message into the database

  },

  room: {
    get: function(callback){
      db.query('select * from room', function(err,data){
        if(err){
          console.log('error')
        }
        callback(data);
      })
    },

    post: function (params, callback) {
      db.query('insert into room(roomname) values(?)', params function(err, data){
        if(err){
          console.log('error');
        }
        callback(data);
      })

    } // a function which can be used to insert a message into the database

  }
};

