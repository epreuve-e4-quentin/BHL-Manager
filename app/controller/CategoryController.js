class CategoryController {

   constructor($view) {
      //this.db = new Database();
   }

   index() {
      this.View = new View("CategoryList");

      $(this.View.element).load(this.View.file, function () {

      });

      console.log(this.View.file);
      this.View.appendBody();
   }


}

module.exports = CategoryController