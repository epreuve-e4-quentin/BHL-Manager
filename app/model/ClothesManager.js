class ClothesManager{
   constructor(){
      this.db = new Database();
   }

   list(callback){
      this.db.getDB();
      this.db.execQuery("SELECT * FROM vetement", [], function(result){
         callback(result);
      },  );
   }
   
   get(id, callback){
      this.db.getDB();
      this.db.execQuery("SELECT * FROM vetement WHERE id=?", [id], function(result){
         callback(result[0]);
      });
   }

   insert(nom, prix, codeGenre, description, couleur, idCateg){
      this.db.getDB();
      this.db.execQuery("INSERT INTO vetement(nom, prix, codeGenre, description, couleur,  idCateg) VALUES(?,?,?,?,?,?)", [nom, prix, codeGenre, description, couleur, idCateg]);
   }

   update(id, nom, prix, codeGenre, description, couleur, idCateg){
      this.db.getDB();
      this.db.execQuery("UPDATE vetement SET nom=?, prix=?, codeGenre=?, description=?, couleur=?, idCateg=? WHERE id = ?", [nom, prix, codeGenre, description, couleur, idCateg, id]);
   }
   
   delete(id){
      this.db.getDB();
      this.db.execQuery("DELETE FROM clothes WHERE id = ?", [id]);
   }
}

module.exports = ClothesManager