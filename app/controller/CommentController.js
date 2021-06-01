class CommentController {

    constructor($view) {
       const Manager = require('../model/CommentManager.js');
 
       this.db = new Database();
       this.commentManager = new Manager();
 
    }
 
    index() {
       // this.commentManager.insert("test");
 
       this.View = new View("comment/index.html");
       var manager = this.commentManager;
 
       $(this.View.element).load(this.View.file, function () {
          var view = this;
       
          manager.list(function (commentList) {
 
             commentList.forEach(element => {
                $(view).find("#tableComment tbody").append(
                   "<tr>" +
                   + " <td> " + element.id + " </td>"
                   + " <td> " + element.id + " </td>"
                   + " <td> " + element.commentaire + " </td>"
                   + " <td> " + "<button class='nav-link' data-ctrl='Comment' data-ctrl-method='edit'> Modifier </button>" + " </td>"
                   + "</tr>"
                );
             });
             
             $(document).ready(function () {
                $(view).find('#tableComment').DataTable({
                   dom: 'ftpl',
                   order: [[1, "asc  "]], //Order des dates en premier
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
       //          $(view).find('#tableCategorie').DataTable({
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
 
    edit() {
       // this.commentManager.insert("test");
 
       this.View = new View("commment/index.html");
 
       $(this.View.element).load(this.View.file, function () {
 
       });
       this.View.appendBody();
 
    }
 
 
 }
 
 module.exports = CommentController