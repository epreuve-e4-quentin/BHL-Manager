class UserManager{
   constructor(){
      this.db = new Database();
   }

   list(callback){
      this.db.getDB();
      this.db.execQuery("SELECT * FROM user", [], function(result){
         callback(result);
      },  );
   }


   get(id, callback){
      this.db.getDB();
      this.db.execQuery("SELECT * FROM user WHERE id=?", [id], function(result){
         callback(result[0]);
      });
   }

   getNbByNamePasswword(username, pwd, callback){
      this.db.getDB();
    
      this.db.execQuery("SELECT COUNT(id) 'nbUser' FROM user WHERE username=? AND password =?", [username, pwd], function(result){
 
         callback(result[0]["nbUser"]);
      });
   }

   insert(nom){
      this.db.getDB();
      this.db.execQuery("INSERT INTO user(nom) VALUES(?)", [nom]);
   }

   update(id,nom){
      this.db.getDB();
      this.db.execQuery("UPDATE user SET nom=? WHERE id=?", [nom, id]);
   }

   
   delete(id){
      this.db.getDB();
      this.db.execQuery("DELETE FROM user WHERE id = ?", [id]);
   }
}

module.exports = UserManager