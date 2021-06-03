class CategoryManager{
   constructor(){
      this.db = new Database();
   }

   list(callback){
      this.db.getDB();
      this.db.execQuery("SELECT * FROM avis", [], function(result){
         callback(result);
      },  );
   }


   get(id, callback){
      this.db.getDB();
      this.db.execQuery("SELECT * FROM avis WHERE id=?", [id], function(result){
         callback(result[0]);
      });
   }

   insert(nom){
      this.db.getDB();
      this.db.execQuery("INSERT INTO avis(nom) VALUES(?)", [nom]);
   }

   update(id,nom){
      this.db.getDB();
      this.db.execQuery("UPDATE avis SET nom=? WHERE id=?", [nom, id]);
   }

   
   delete(id){
      this.db.getDB();
      this.db.execQuery("DELETE FROM avis WHERE id = ?", [id]);
   }

   valid(id, value){
      this.db.getDB();
      this.db.execQuery("UPDATE avis SET valid=? WHERE id=?", [value, id]);
   }
}

module.exports = CategoryManager