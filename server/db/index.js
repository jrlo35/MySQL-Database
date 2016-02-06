var mysql = require('mysql');
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat"
module.exports.connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chat',
  multipleStatements: true
});
exports.connection.connect(function(err){
  if(!err){
    console.log("Database is connected.");
  }else{
    console.log("Error connecting database");
  }
});
// exports.connection.query('select * from messages', function(err,data){
//   if(err){
//     console.log('error');
//   }
//   console.log(data);
// });

var jon = {
   userName: 'sonny'
};
exports.connection.query('insert into users (username) values(?)', jon.userName, function(err, result){
   if(err){
     console.error(err);
     return;
   }
   console.log('**********');
});


exports.connection.query('select * from users', function(err, data){
  if(err){
    console.error(err);
  }
  console.log(data);
});