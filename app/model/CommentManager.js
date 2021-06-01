class CommentManager{
    constructor(){
       this.db = new Database();
    }
 
    list(callback){
       this.db.getDB();
       this.db.execQuery("SELECT * FROM avis", [], function(result){
          callback(result);
       },  );
    }
 
    listV2(){
       this.db.getDB();
       var hey ;
       this.db.execQuery("SELECT * FROM avis", [], function(result){
          hey = result;
       });
       return hey;
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
    
 }
 
 module.exports = CommentManager