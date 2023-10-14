const menu = document.getElementById("nav__icon");
const message = document.getElementById("messages");
const cerrar_ventana = document.getElementById("menu__url");
const galeria = document.getElementsByClassName("galeria")[0];
const gal = document.getElementById("gal");
let flag = 0;
let temp = true;
menu.addEventListener("click", () => {
  cerrar_ventana.classList.toggle("rocio");
});
function MessageAd(text){
  message.style.display = "flex";
  message.style.flexDirection = "column";
  message.style.placeContent = "center";
  message.style.marginRight = "0%";
  message.style.gap = "10px";
  //añadir boton de cerrado
  // let button = document.createElement("button");
  // button.innerText = "cerrar";
  // button.classList.add("button");
  // button.setAttribute("onclick", "closeAd()");
  message.innerHTML = "<p>"+text+"</p>";
  setTimeout(() => {
    message.style.marginRight = "-100%";
  },2500);
}
function expand(id) {
  const image = document.getElementById(id);
  var galarray = galeria.children;
  for (let index = 0; index < galarray.length; index++) {
    galeria.children[index].classList.remove("expand");
  } 
  //quitar todas las clases expand de todos los elemento
    image.classList.add("expand");
    if(temp){
      setTimeout(() => {
        image.classList.remove("expand");
      }, 10000);

    // despues de 10 segundos, se quita el expand
    }
    // expandimos la imagen, atribuyendo una clase
  gal.addEventListener("mouseleave", () => {
    image.classList.remove("expand");
  });
  // si salimos de la galeria, se quitan todos los expand
  image.addEventListener("dblclick", ()=>{
    image.classList.remove("expand");
  })
  // con doble click, quitamos el expand
 
}
gal.addEventListener("mouseover", () => {
  if (flag == 0) {
    flag = 1;
   MessageAd("Prueba a Cliquear las Imagenes!")
  }
});
function closeAd() {
  // message.style.display = "none";
  // se puede hacer sin transicion simplemente quitandole el display
  message.style.marginRight = "-100%";
}
function DesTemp(){
  temp = false
    MessageAd("Tiempo Desactivado Exitosamente!")
  //solucionar eventos que cambian repentinamente
  // se puede hacer creando y destuyendo mensajes en vez  de utiliza displays 
}
function ActTemp(){
  temp = true
  MessageAd("Tiempo Reactivado Exitosamente!")
}