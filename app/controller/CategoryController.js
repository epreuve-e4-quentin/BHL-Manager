class CategoryController {

   constructor($view) {
      const Manager = require('../model/CategoryManager.js');

      this.db = new Database();
      this.categoryManager = new Manager();

   }

   index() {
      // this.categoryManager.insert("test");

      this.View = new View("CategoryList");
      var manager = this.categoryManager;

      $(this.View.element).load(this.View.file, function () {
         var view = this;
      
         manager.list(function (categList) {

            categList.forEach(element => {
               $(view).find("#tableCategorie tbody").append(
                  "<tr>" +
                  + " <td> " + element.id + " </td>"
                  + " <td> " + element.id + " </td>"
                  + " <td> " + element.nom + " </td>"
                  + " <td> " + "<button data-ctrl='Category' data-ctrl-method='edit'> Modifier </button>" + " </td>"
                  + "</tr>"
               );
            });
               $(document).ready(function () {
               $(view).find('#tableCategorie').DataTable({
                  dom: 'ftpl',
                  order: [[1, "asc  "]], //Order des dates en premier
                  language: {
                     url: "public/script/Datatable/french.json"
                  }
               })
            });
         

            // $(document).on("click", "#mainNav ul li", function () {
            //    //alert($(this).attr("data-ctrl"));
            //    ipcRenderer.send('nav:change', $(this).attr("data-ctrl"), $(this).attr("data-ctrl-method"));
            // });

         });
       });//.ready(function(){
      //    //Datatable
      //       $(document).ready(function () {
      //          $(view).find('#tableCategorie').DataTable({
      //             dom: 'ftpl',
      //             order: [[1, "asc  "]], //Order des dates en premier
      //             language: {
      //                url: "public/script/Datatable/french.json"
      //             }
      //          })
      //       });
      // });




      this.View.appendBody();

   }

   edit() {
      // this.categoryManager.insert("test");

      this.View = new View("CategoryList");

      $(this.View.element).load(this.View.file, function () {

      });
      this.View.appendBody();

   }


}

module.exports = CategoryController