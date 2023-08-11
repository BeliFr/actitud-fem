let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function(){
  let Desplazamiento = window.pageYOffset;
  if (ubicacionPrincipal >= Desplazamiento){
    document.getElementById("navbar").style.top= "0";
  }else{
    document.getElementById("navbar").style.top= "-100px";
  }
  ubicacionPrincipal = Desplazamiento;
}