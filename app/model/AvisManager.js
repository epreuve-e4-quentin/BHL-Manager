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