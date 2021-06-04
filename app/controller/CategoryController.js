class CategoryController {

   constructor($view) {
      const Manager = require('../model/CategoryManager.js');

      this.db = new Database();
      this.categoryManager = new Manager();

   }

   index() {
      
      // this.categoryManager.insert("test");

      this.View = new View("category/index.html");
      var categoryManager = this.categoryManager;

      $(this.View.element).load(this.View.file, function () {
         var view = this;
      
         categoryManager.list(function (categList) {

            categList.forEach(element => {
               $(view).find("#tableCategorie tbody").append(
                  "<tr>" +
                  + " <td> </td>"
                  + " <td> " + element.id + " </td>"
                  + " <td> " + element.nom + " </td>"
                  + " <td> " + "<a href='?ctrl=Category&method=edit&param=["+element.id+"]'><button > Modifier </button>" + " </a> "
                  + "" + "<a href='?ctrl=Category&method=delete&param=["+element.id+"]'><button > Supprimer </button>" + " </a> </td>"
                  + "</tr>"
               );
            });
            
            $(document).ready(function () {
               $(view).find('#tableCategorie').DataTable({
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

 
   edit(id) {

      this.View = new View("category/edit.html");
      var categoryManager = this.categoryManager;


      $(this.View.element).load(this.View.file, function () {
         var view = this;

         categoryManager.get(id ,function (categ) {
             $("form#categoryEdit input[name=nom]").val(categ.nom);
      
             $('a#entityDelete').attr("href", "?ctrl=Category&method=delete&param=["+categ.id+"]");


         });


         //Formulaire
         $('#send_form').on('click',function(){
            var form = $( "form#categoryEdit" ).serializeArray()[0];
            alert("Entité modifiée");
            categoryManager.update(id, form["value"]);
         });

      });
      this.View.appendBody();

   }

   delete(id) {
      var categoryManager = this.categoryManager;
      categoryManager.delete(id) ;
      alert("Entité supprimé");
      window.location.href = "?ctrl=Category&method=index";
   }


   add() {

      this.View = new View("category/add.html");
      var categoryManager = this.categoryManager;


      $(this.View.element).load(this.View.file, function () {
         var view = this;

         //Formulaire
         $('#send_form').on('click',function(){
 
            var form = serializeForm('categoryAdd') ;
            categoryManager.insert( form.nom );
            alert("L'entité à bien été ajouté");
            window.location.href = "?ctrl=Category&method=index";
            
         });

      });
      this.View.appendBody();

   }



}

module.exports = CategoryController