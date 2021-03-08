class CategoryController {

   constructor($view) {
      const Manager =  require('../model/CategoryManager.js');

      this.db = new Database();
      this.categoryManager = new Manager();
   
   }

   index() {
      
      this.categoryManager.list(function(categList){
         console.log(categList);
      });

      this.categoryManager.insert("test");

      this.View = new View("CategoryList");

      $(this.View.element).load(this.View.file, function () {

      });

    
      this.View.appendBody();
   }


}

module.exports = CategoryController