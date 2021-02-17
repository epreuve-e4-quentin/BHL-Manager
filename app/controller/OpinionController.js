class OpinionController {

   constructor($view) {

   }

   index() {
      alert("Bienvenue sur le ctr Opinion");
      this.View = new View("OpinionList");

      $(this.View.element).load(this.View.file, function () {

      });

      console.log(this.View.file);
      this.View.appendBody();
   }


}

module.exports = OpinionController