class Database{

   setBdd(){
      var mysql = require('mysql');

      this.connection = mysql.createConnection({
         host     : 'localhost',
         user     : 'root',
         password : 'root',
         database : 'bhl_clothes'
      });

      
      this.connection.connect(function(err) {
         if(err){
            console.log(err.code);
            console.log(err.fatal);
         }
      });

   }

   getDB(){
      if(this.connection == null){
         this.setBdd();
      }
   }

   //Exceute 
   execQuery(query, callback){
      
      var wtf = this.connection.query(query, function(err, rows, fields) {

         callback(rows);

         if(err){
             console.log("Une erreur est survenue lors de l'exécution de la requête.");
             console.log(err);
         }
         else{
           
         }
         
     });
     
      // Close the connection
      
      // this.connection.end(function(){});
      // this.connection = null;

      return callback;
   }



}

module.exports = Database