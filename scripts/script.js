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
function MessageAd(text, time) {
  let div = document.getElementById("messages");
  let box = document.createElement("p");
  box.innerHTML = text;
  box.id = "texto";
  box.classList.toggle("messages");
  if (div.childNodes.length >= 1) {
    div.removeChild(box);
  }
  div.appendChild(box);
  setTimeout(() => {
    div.removeChild(box);
  }, time);
}
function expand(id) {
  const image = document.getElementById(id);
  var galarray = galeria.children;
  for (let index = 0; index < galarray.length; index++) {
    galeria.children[index].classList.remove("expand");
  }
  //quitar todas las clases expand de todos los elemento
  image.classList.add("expand");
  if (temp) {
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
  image.addEventListener("dblclick", () => {
    image.classList.remove("expand");
  });
  // con doble click, quitamos el expand
}
gal.addEventListener("mouseover", () => {
  if (flag == 0) {
    flag = 1;
    MessageAd("Prueba a Cliquear las Imagenes!", 1000);
  }
});
function closeAd() {
  // message.style.display = "none";
  // se puede hacer sin transicion simplemente quitandole el display
  message.style.marginRight = "-100%";
}
function DesTemp() {
  temp = false;
  MessageAd("Tiempo Desactivado Exitosamente!", 1000);
  //solucionar eventos que cambian repentinamente
  // se puede hacer creando y destuyendo mensajes en vez  de utiliza displays
}
function ActTemp() {
  temp = true;
  MessageAd("Tiempo Reactivado Exitosamente!", 1000);
}
document.addEventListener("keypress", (e) => {
  switch (e.key) {
    case "1":
      expand(1);
      break;
    case "2":
      expand(2);
      break;
    case "3":
      expand(3);
      break;
    case "4":
      expand(4);
      break;
    case "5":
      expand(5);
      break;
  }
});
function whatsthis(){
  MessageAd(`
  <p>Clickea sobre los objetos para expandir las imagenes.</p>
  <b>Desactivar Temporal:</b> Sirve para quitar la expansion de las imagenes despues de 10 segundos.
  <b>Activar Temporal:</b> Sirve para quitarle la expansion a las imagenes despues de 10 segundos.
  <b>Prueba a tocar los numeros del teclado entre el 1 al 5</b>
  `, 6000)
}