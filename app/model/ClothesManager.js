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

   insert(nom, prix, motifPosition, codeGenre, description, idCateg){
      this.db.getDB();
      this.db.execQuery("INSERT INTO vetement(nom, prix, motifPosition, codeGenre, description, idCateg) VALUES(?,?,?,?,?,?)", [nom, prix, motifPosition, codeGenre, description, idCateg]);
   }

   update(id, nom, prix, motifPosition, codeGenre, description, idCateg){
      this.db.getDB();
      this.db.execQuery("UPDATE vetement SET id=?, nom=?, prix=?, motifPosition=?, codeGenre=?, description=?, idCateg=?", [id, nom, prix, motifPosition, codeGenre, description, idCateg]);
   }
   
}

module.exports = ClothesManager