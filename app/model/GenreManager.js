class CategoryManager{
   constructor(){
      this.db = new Database();
   }

   list(callback){
      this.db.getDB();
      this.db.execQuery("SELECT * FROM genre", [], function(result){
         callback(result);
      },  );
   }

   listV2(){
      this.db.getDB();
      var hey ;
      this.db.execQuery("SELECT * FROM genre", [], function(result){
         hey = result;
      });
      return hey;
   }

   get(id, callback){
      this.db.getDB();
      this.db.execQuery("SELECT * FROM genre WHERE code=?", [id], function(result){
         callback(result[0]);
      });
   }

   // insert(nom){
   //    this.db.getDB();
   //    this.db.execQuery("INSERT INTO genre(nom) VALUES(?)", [nom]);
   // }

   // update(id,nom){
   //    this.db.getDB();
   //    this.db.execQuery("UPDATE genre SET nom=? WHERE id=?", [nom, id]);
      
   // }
   
}

module.exports = CategoryManager