class OpinionController {

   constructor($view) {

   }

   index() {
      this.View = new View("OpinionList");

      $(this.View.element).load(this.View.file, function () {

      });

      console.log(this.View.file);
      this.View.appendBody();
   }


}

module.exports = OpinionController