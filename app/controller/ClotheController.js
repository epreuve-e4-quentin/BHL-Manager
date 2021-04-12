class ClotheController {

   constructor($view) {
      const Manager = require('../model/ClothesManager.js');
      this.ClothesManager = new Manager();
   }

   index() {
      // this.ClothesManager.insert("test");

      this.View = new View("ClotheList");
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
                  + " <td> " + "<a href='?ctrl=Clothe&method=edit&param=["+element.id+"]'><button > Modifier </button>" + " </a> </td>"
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

   edit(id) {

      this.View = new View("ClothevEdit");
      var clotheManager = this.clotheManager;

      $(this.View.element).load(this.View.file, function () {
         var view = this;

         clotheManager.get(id ,function (clothe) {
             $("form#clotheEdit input[name=nom]").val(clothe.nom);
             $("form#clotheEdit input[name=prix]").val(clothe.prix);
             $("form#clotheEdit input[name=codeGenre]").val(clothe.codeGenre);
             $("form#clotheEdit input[name=description]").val(clothe.description);
             $("form#clotheEdit input[name=idCateg]").val(clothe.idCateg);
         });

         //Formulaire
         $('#send_form').on('click',function(){
            var form = $( "form#clotheEdit" ).serialize();
            console.log(form);
            // clotheManager.update(id, form["value"]);
         });

      });
      this.View.appendBody();

   }


}

module.exports = ClotheController