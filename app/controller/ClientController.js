class ClientController {

   constructor($view) {

   }

   index() {
      
      this.View = new View("ClientList");

      $(this.View.element).load(this.View.file, function () {
         $(this).find("#zzz").append("<li> HEYY </li>");
      });

     
      this.View.appendBody();


   }


}

module.exports = ClientController