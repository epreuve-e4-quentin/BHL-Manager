


class SecurityController {

   constructor($view) {
      const Manager = require('../model/userManager.js');

      this.db = new Database();
      this.userManager = new Manager();

   }

   //Se connecter
   index() {
      
      // this.userManager.insert("test");

      this.View = new View("security/index.html");
      var userManager = this.userManager;

      $(this.View.element).load(this.View.file, function () {
         var view = this;

         

         //Formulaire
         $('#send_form').on('click',function(){
            var form = serializeForm('loginForm') ;

            userManager.getNbByNamePasswword(form.username, form.pwd ,function (nb) {
               if(nb >= 1){
                  const electron = require('electron');
                  const { ipcRenderer } = electron;
                  ipcRenderer.send('security:login:allow', true);
                  window.location.href = "?ctrl=Clothe&method=index";
               }
               else{
                  alert("Identifiant incorrecte") ;
               }
           });

         });
      });

      this.View.replaceBody();

   }


}

module.exports = SecurityController