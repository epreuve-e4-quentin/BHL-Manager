class ClientController {

   constructor($view) {

      this.View = new View("clientList");

      $(this.View.element).load(this.View.file, function () {
         // $(this).find("#zzz").append("<li> HEYY </li>");
      });

   }



}

module.exports = ClientController