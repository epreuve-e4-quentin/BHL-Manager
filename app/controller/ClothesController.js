class ClothesController {

   constructor($view) {
      const Manager = require('../model/ClothesManager.js');
      this.ClothesManager = new Manager();
   }

   index() {
      // this.ClothesManager.insert("test");

      this.View = new View("ClothesList");
      var manager = this.ClothesManager;

      $(this.View.element).load(this.View.file, function () {
         var view = this;
      
         manager.list(function (clothesList) {

            clothesList.forEach(element => {
               $(view).find("#tableClothes tbody").append(
                  "<tr>" +
                  + " <td> " + element.id + " </td>"
                  + " <td> " + element.id + " </td>"
                  + " <td> " + element.nom + " </td>"
                  + " <td> " + "<button class='nav-link' data-ctrl='Clothes' data-ctrl-method='edit'> Modifier </button>" + " </td>"
                  + "</tr>"
               );
            });
            
            $(document).ready(function () {
               $(view).find('#tableClothes').DataTable({
                  dom: 'ftpl',
                  order: [[1, "asc  "]], //Order des dates en premier
                  language: {
                     url: "public/script/Datatable/french.json"
                  }
               })
            });
         });
       });



      this.View.appendBody();

   }


}

module.exports = ClothesController