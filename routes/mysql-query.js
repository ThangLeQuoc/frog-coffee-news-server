var SQLconnection = require('./mysql-connector');
var mysql = require('mysql2');

module.exports = {
  
  getArticle : function(){
    console.log('Attempt to get articles');
    console.log(SQLconnection.connection);
    
    
    
    SQLconnection.connection.end(function(err){
        if(err){
            console.log(err);
            return;
        }
        else{
            console.log("Disconnected from thang o sau");
        }
    });
  }
}
