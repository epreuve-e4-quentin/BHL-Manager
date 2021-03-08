class OpinionController {

   constructor($view) {

   }

   index() {
      this.View = new View("OpinionList");

      $(this.View.element).load(this.View.file, function () {

      });

      
      this.View.appendBody();
   }


}

module.exports = OpinionController