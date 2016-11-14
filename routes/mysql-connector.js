var mysql = require('mysql2');

//create connection 
var connection = mysql.createConnection({
  host:'localhost',
  user:'administrator',
  password: 'admin',
  database: 'newsdb'
});

// open connection
connection.connect(function(err){
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log("Connection Established");
    }
});

connection.end(function(err){
        if(err){
            console.log(err);
            return;
        }
        else{
            console.log("Disconnected");
        }
    });

    /*
module.exports = connection;
*/
exports.connection = connection;

