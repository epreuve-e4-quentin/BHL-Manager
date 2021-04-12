class ClientController {

   constructor($view) {

   }

   index() {
  
  
      this.View = new View("client/index.html");

      $(this.View.element).load(this.View.file, function () {
         $(this).find("#zzz").append("<li> HEYY </li>");
      });

     
      this.View.appendBody();


   }


}

module.exports = ClientController