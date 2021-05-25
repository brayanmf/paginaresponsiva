
var a=window.pageYOffset
window.addEventListener ("scroll",function(){
  let b=window.pageYOffset
  if (a>=b){
      document.getElementsByTagName("nav")[0].style.top = "0"
  }else{
document.getElementsByTagName("nav")[0].style.top = "-100px"
  }
a=b
})

var enlacesheader = document.querySelectorAll(".enlaces-header")[0];
var semaforo = true;
document.querySelectorAll(".hamburguer")[0].addEventListener("click",function(){
  enlacesheader.classList.toggle("menudosF")
})
