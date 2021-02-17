class View {


   //Construction de la vue
   constructor(viewName) {
      viewName = viewName.charAt(0).toUpperCase() + viewName.slice(1);
      this.file = 'view/' + viewName + 'View.html';
      this.element = document.createElement("div");

   }

   appendBody() {
      $("body").html(this.element);
   }

   setFile(file) {
      this.file = file;
   }

   getView() {
      return this.element;
   }


}


module.exports = View