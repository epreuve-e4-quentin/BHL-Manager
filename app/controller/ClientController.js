class ClientController {

   constructor($view) {
      const Manager = require('../model/ClientManager.js');

      this.db = new Database();
      this.clientManager = new Manager();

   }

   index() {
      // this.clientManager.insert("test");

      this.View = new View("client/index.html");
      var manager = this.clientManager;

      $(this.View.element).load(this.View.file, function () {
         var view = this;
      
         manager.list(function (clientList) {

            console.log(clientList)
            clientList.forEach(element => {
               $(view).find("#tableClient tbody").append(
                  "<tr>" +
                  + " <td> " + element.id + " </td>"
                  + " <td> " + element.id + " </td>"
                  + " <td> " + element.email + " </td>"
                  + " <td> " + element.nom + " </td>"
                  + " <td> " + element.prenom + " </td>"
                  + " <td> " + "<a href='?ctrl=Client&method=edit&param=[" + element.id + "]'><button > Modifier </button>" + " </a> </td>"

                  + "</tr>"
               );
            });

            
            $(document).ready(function () {
               $(view).find('#tableClient').DataTable({
                  order: [[1, "asc "]], //Order des dates en premier
                  language: {
                     url: "public/Datatable/french.json"
                  }
               })
            });
         

            // $(document).on("click", "#mainNav ul li", function () {
            //    //alert($(this).attr("data-ctrl"));
            //    ipcRenderer.send('nav:change', $(this).attr("data-ctrl"), $(this).attr("data-ctrl-method"));
            // });

         });
       });//.ready(function(){
      //    //Datatable
      //       $(document).ready(function () {
      //          $(view).find('#tableClient').DataTable({
      //             dom: 'ftpl',
      //             order: [[1, "asc  "]], //Order des dates en premier
      //             language: {
      //                url: "public/script/Datatable/french.json"
      //             }
      //          })
      //       });
      // });




      this.View.appendBody();

   }

   edit(id) {
      this.View = new View("client/edit.html");
      var clientManager = this.clientManager;


      $(this.View.element).load(this.View.file, function () {
         var view = this;

         clientManager.get(id ,function (client) {
             $("form#clientEdit input[name=email]").val(client.email);
             $("form#clientEdit input[name=nom]").val(client.nom);
             $("form#clientEdit input[name=prenom]").val(client.prenom);

             $('a#entityDelete').attr("href", "?ctrl=Client&method=delete&param=["+client.id+"]");


         });


         //Envoyer le Formulaire
         $('#send_form').on('click', function () {
            var form = serializeForm( 'clientEdit' ) ;
            
            clientManager.update(id, form.nom, form.prenom, form.email);
            alert("L'entité à bien été modifé");
         });

      });
      this.View.appendBody();
   }

   add() {

      this.View = new View("client/add.html");
      var clientManager = this.clientManager;


      $(this.View.element).load(this.View.file, function () {
         var view = this;

         //Formulaire
         $('#send_form').on('click',function(){
 
            var form = serializeForm('clientAdd') ;
            //console.log(form.nom);
            clientManager.insert( form.nom, form.prenom, form.email );
            
         });

      });
      this.View.appendBody();

   }


}

module.exports = ClientController