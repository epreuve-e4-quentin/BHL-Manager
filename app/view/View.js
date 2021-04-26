class View {


   //Construction de la vue
   constructor(viewPath) {
      this.file = 'view/' + viewPath;
      this.element = document.createElement("div");
   }

   appendBody() {
      $("body #mainContent").html(this.element);
   }

   replaceBody() {
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