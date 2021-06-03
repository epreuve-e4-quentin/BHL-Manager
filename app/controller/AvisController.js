class AvisController {

   constructor($view) {
      const Manager = require('../model/AvisManager.js');

      this.db = new Database();
      this.avisManager = new Manager();
   }

   index() {
      
      // this.avisManager.insert("test");

      this.View = new View("avis/index.html");
      var avisManager = this.avisManager;

      $(this.View.element).load(this.View.file, function () {
         var view = this;
      
         avisManager.list(function (categList) {

            categList.forEach(element => {
               var validValue = "<td class='no-valid'> Non Validé </td>"
               var btnValid = "<a href='?ctrl=Avis&method=valid&param=["+element.id+",1]'><button onclick='return confirm(\"Vouslez-vous vraiment valider ce commentaire ?\")' > Valider </button>" +" </a> ";
               if(element.valid == 1){
                  validValue = " <td class='valid'> Validé </td>";
                  btnValid = "<a href='?ctrl=Avis&method=valid&param=["+element.id+",0]'><button onclick='return confirm(\"Vouslez-vous vraiment invalider ce commentaire ?\")'> Invalider </button>" +" </a> ";
               }
             


               $(view).find("#tableAvis tbody").append(
                  "<tr>" +
                  + " <td> </td>"
                  + " <td> " + element.id + " </td>"
                  + " <td> " + element.idClient + " </td>"
                  + " <td> " + element.commentaire + " </td>"
                  + " <td> " + element.note + "/5 </td>"
                  + validValue
                  + "<td>" + btnValid + "<a href='?ctrl=Avis&method=delete&param=["+element.id+"]'><button onclick='return confirm(\"Vouslez-vous vraiment supprimer ce commenataire ?\")' > Supprimer </button>" + " </a> </td>"
                  + "</tr>"
               );
            });
            
            $(document).ready(function () {
               $(view).find('#tableAvis').DataTable({
                  order: [[0, "asc"]], //Order des dates en premier
                  language: {
                     url: "public/Datatable/french.json"
                  }
               })
            });

         });
       });

      this.View.appendBody();

   }

 

   valid(id, value) {
      var avisManager = this.avisManager;
      avisManager.valid(id, value) ;
      alert("Status de l'avis modifié");
      window.location.href = "?ctrl=Avis&method=index";
      
   }

   delete(id) {
      var avisManager = this.avisManager;
      avisManager.delete(id) ;
      alert("Entité supprimé");
      window.location.href = "?ctrl=Avis&method=index";
   }


   add() {

      this.View = new View("avis/add.html");
      var avisManager = this.avisManager;


      $(this.View.element).load(this.View.file, function () {
         var view = this;

         //Formulaire
         $('#send_form').on('click',function(){
 
            var form = serializeForm('avisAdd') ;
            avisManager.insert( form.nom );
            
         });

      });
      this.View.appendBody();

   }



}

module.exports = AvisController