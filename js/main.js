/*SCROLL ocultar nav por etiqueta */
var a=window.pageYOffset//0
window.addEventListener ("scroll",function(){
  let b=window.pageYOffset
  if (a>=b){
      document.getElementsByTagName("nav")[0].style.top = "0"/*seleccionar por etiquetas*/
  }else{
document.getElementsByTagName("nav")[0].style.top = "-100px"
  }
a=b/*++*/
})
/*menu nav */
var enlacesheader = document.querySelectorAll(".enlaces-header")[0];/*seleccionar por class*/ 
var semaforo = true;
document.querySelectorAll(".hamburguer")[0].addEventListener("click",function(){
  enlacesheader.classList.toggle("menudosF")/*solo cambia stylo por click .togle regresa*/
})