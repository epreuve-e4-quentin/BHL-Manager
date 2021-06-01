class CategoryManager{
   constructor(){
      this.db = new Database();
   }

   list(callback){
      this.db.getDB();
      this.db.execQuery("SELECT * FROM categorie", [], function(result){
         callback(result);
      },  );
   }


   get(id, callback){
      this.db.getDB();
      this.db.execQuery("SELECT * FROM categorie WHERE id=?", [id], function(result){
         callback(result[0]);
      });
   }

   insert(nom){
      this.db.getDB();
      this.db.execQuery("INSERT INTO categorie(nom) VALUES(?)", [nom]);
   }

   update(id,nom){
      this.db.getDB();
      this.db.execQuery("UPDATE categorie SET nom=? WHERE id=?", [nom, id]);
   }

   
   delete(id){
      this.db.getDB();
      this.db.execQuery("DELETE FROM categorie WHERE id = ?", [id]);
   }
}

module.exports = CategoryManager