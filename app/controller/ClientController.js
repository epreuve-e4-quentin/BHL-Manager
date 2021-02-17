class ClientController {

   constructor($view) {

   }

   index() {

      alert("Bienvenue sur le ctr Client");
      this.View = new View("ClientList");

      $(this.View.element).load(this.View.file, function () {
         $(this).find("#zzz").append("<li> HEYY </li>");
      });

      console.log(this.View.file);
      this.View.appendBody();


   }


}

module.exports = ClientController