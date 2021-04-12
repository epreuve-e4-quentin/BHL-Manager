

class NavigationController {
   constructor() {


   }

   index() {

      this.View = new View("view/navigation.html");
      
      //Ajout de la vue au body du html
      $(this.View.element).load(this.View.file);
      $("body").append(this.View.element);
     
    
      //Les fonctionalités de la vue
      //this.changeView();
   }

   changeView(){
      const electron = require('electron');
      const { ipcRenderer } = electron;
      //Navigation évènement;
      
      $(document).on("click", "#mainNav ul li", function () {
         //alert($(this).attr("data-ctrl"));
         ipcRenderer.send( 'nav:change' , $(this).attr("data-ctrl"), $(this).attr("data-ctrl-method") );
      });

   }



}



module.exports = NavigationController