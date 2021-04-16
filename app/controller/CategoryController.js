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
                  + " <td> " + "<a href='?ctrl=Category&method=edit&param=["+element.id+"]'><button > Modifier </button>" + " </a> </td>"
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

      console.log(categoryManager.listV2());

      $(this.View.element).load(this.View.file, function () {
         var view = this;

         categoryManager.get(id ,function (categ) {
             $("form#categoryEdit input[name=nom]").val(categ.nom);
         });

         //Formulaire
         $('#send_form').on('click',function(){
            var form = $( "form#categoryEdit" ).serializeArray()[0];
            alert();
            categoryManager.update(id, form["value"]);
         });

      });
      this.View.appendBody();

   }

   add(id) {

      this.View = new View("category/add.html");
      var categoryManager = this.categoryManager;

      console.log(categoryManager.listV2());

      $(this.View.element).load(this.View.file, function () {
         var view = this;

         categoryManager.get(id ,function (categ) {
             $("form#categoryEdit input[name=nom]").val(categ.nom);
         });

         //Formulaire
         $('#send_form').on('click',function(){
            var form = $( "form#categoryEdit" ).serializeArray()[0];
            alert();
            categoryManager.insert( form["value"]);
         });

      });
      this.View.appendBody();

   }



}

module.exports = CategoryController