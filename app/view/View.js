class View {
  

    //Construction de la vue
   constructor(viewName){
      this.file= 'view/view'+viewName+'.html';
      this.element = document.createElement("div") ;
      
   }

   setFile(file){
      this.file = file;
   }

   getView(){
      return this.element ;
   }


}


module.exports = View