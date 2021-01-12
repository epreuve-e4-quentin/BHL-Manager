class ClientController{

   constructor(){

      this.View = new View("ClientList");
      
      $(this.View.element).load(this.View.file, function(){    
        // $(this).find("#zzz").append("<li> HEYY </li>");
      });

   }


   
}

module.exports = ClientController