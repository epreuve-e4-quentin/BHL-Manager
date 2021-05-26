class ClotheController {

   constructor($view) {
      const ClotheManager = require('../model/ClothesManager.js');
      this.ClotheManager = new ClotheManager();

      const CategoryManager = require('../model/CategoryManager.js');
      this.CategoryManager = new CategoryManager();

      const GenreManager = require('../model/GenreManager.js');
      this.GenreManager = new GenreManager();
   }

   index() {
      // this.ClothesManager.insert("test");

      this.View = new View("clothes/index.html");
      var manager = this.ClotheManager;

      $(this.View.element).load(this.View.file, function () {
         var view = this;

         manager.list(function (clothesList) {

            clothesList.forEach(element => {
               $(view).find("#tableClothes tbody").append(
                  "<tr>" +
                  + " <td> </td>"
                  + " <td> " + element.id + " </td>"
                  + " <td> " + element.nom + " </td>"
                  + " <td> " + "<a href='?ctrl=Clothe&method=edit&param=[" + element.id + "]'><button > Modifier </button>" + " </a> </td>"
                  + "</tr>"
               );
            });

            $(document).ready(function () {
               $(view).find('#tableClothes').DataTable({
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

      this.View = new View("clothes/edit.html");
      var clotheManager = this.ClotheManager;
      var CategoryManager = this.CategoryManager;
      var GenreManager = this.GenreManager;

      $(this.View.element).load(this.View.file, function () {
         var view = this;

         //Formulaire


         //Envoyer le Formulaire
         $('#send_form').on('click', function () {
            var form = serializeForm( 'clotheEdit' ) ;
            
            clotheManager.update(id, form.nom, form.prix, form.codeGenre, form.description, form.couleur,  form.idCateg, form.idCateg);
            alert("L'entité à bien été modifé");
         });

         //Liste des catégories
         CategoryManager.list(function (categs) {
            categs.forEach(categ => {
               $(view).find("#categList").append("<option value='" + categ.id + "'>" + categ.nom + "</option>");
            });
         });

         //Liste des catégories
         GenreManager.list(function (genres) {
            genres.forEach(genre => {
               $(view).find("#genreList").append("<option value='" + genre.code + "'>" + genre.libelle + "</option>");
            });
         });

         clotheManager.get(id, function (clothe) {
            
            $(view).find("form#clotheEdit input[name=nom]").val(clothe.nom);
            $(view).find("form#clotheEdit input[name=prix]").val(clothe.prix);
            $(view).find("form#clotheEdit select[name=codeGenre]").val(clothe.codeGenre);
            $(view).find("form#clotheEdit textarea[name=description]").val(clothe.description);
            $(view).find("form#clotheEdit input[name=couleur]").val(clothe.couleur);
            $(view).find("form#clotheEdit select[name=idCateg]").val(clothe.idCateg);
         });
         

      });


      this.View.appendBody();

   }

   add() {

      this.View = new View("clothes/add.html");
      var clotheManager = this.ClotheManager;
      var CategoryManager = this.CategoryManager;
      var GenreManager = this.GenreManager;

      $(this.View.element).load(this.View.file, function () {
         var view = this;

         //Formulaire


         //Envoyer le Formulaire
         $('#send_form').on('click', function () {
            var form = serializeForm('clotheEdit') ;
            clotheManager.insert(form.nom, form.prix, form.codeGenre, form.description, form.couleur,  form.idCateg);
            alert("L'entité à bien été ajouté");
         });

         //Liste des catégories
         CategoryManager.list(function (categs) {
            categs.forEach(categ => {
               $(view).find("#categList").append("<option value='" + categ.id + "'>" + categ.nom + "</option>");
            });
         });

         //Liste des catégories
         GenreManager.list(function (genres) {
            genres.forEach(genre => {
               $(view).find("#genreList").append("<option value='" + genre.code + "'>" + genre.libelle + "</option>");
            });
         });

   
         

      });


      this.View.appendBody();

   }


}

module.exports = ClotheController