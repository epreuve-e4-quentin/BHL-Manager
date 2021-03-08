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
   execQuery(query, tabValues = null, callback = null){
      
      var wtf = this.connection.query(query, tabValues, function(err, rows, fields) {

         if(callback != null){
            callback(rows);
         }
         

         if(err){
             console.log("Une erreur est survenue lors de l'exécution de la requête.");
             console.log(err);
         }
         else{
           
         }
         
     });
     
      // Close the connection
      
      this.connection.end(function(){});
      this.connection = null;


   }



}

module.exports = Database