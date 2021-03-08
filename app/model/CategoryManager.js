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

   insert(nom){
      this.db.getDB();
      this.db.execQuery("INSERT INTO categorie(nom) VALUES(?)", [nom]);
   }
   
}

module.exports = CategoryManager