class OpinionController {

   constructor($view) {

   }

   index() {
      this.View = new View("opinion/index.html");

      $(this.View.element).load(this.View.file, function () {

      });

      
      this.View.appendBody();
   }


}

module.exports = OpinionController