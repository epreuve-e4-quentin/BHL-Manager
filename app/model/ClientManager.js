class ClientManager{
    constructor(){
       this.db = new Database();
    }
 
    list(callback){
       this.db.getDB();
       this.db.execQuery("SELECT * FROM client", [], function(result){
          callback(result);
       },  );
    }
 
    listV2(){
       this.db.getDB();
       var hey ;
       this.db.execQuery("SELECT * FROM client", [], function(result){
          hey = result;
       });
       return hey;
    }
 
    get(id, callback){
       this.db.getDB();
       this.db.execQuery("SELECT * FROM client WHERE id=?", [id], function(result){
          callback(result[0]);
       });
    }
 
    insert(nom,prenom,email){
       this.db.getDB();
       this.db.execQuery("INSERT INTO client(nom,prenom,email) VALUES(?,?,?)", [nom,prenom,email]);
    }
    
 
    update(id,nom,prenom,email){
       this.db.getDB();
       this.db.execQuery("UPDATE client SET nom=?, prenom=?, email=? WHERE id=?", [nom,prenom,email,id]);
    }
    
 }
 
 module.exports = ClientManager