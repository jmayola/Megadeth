const menu = document.getElementById("nav__icon");
const message = document.getElementById("messages")
const cerrar_ventana = document.getElementById("menu__url");
const galeria = document.getElementsByClassName("galeria")[0];
const gal = document.getElementById("gal");
let flag = 0
menu.addEventListener("click", () => {
  cerrar_ventana.classList.toggle("rocio");
});
function expand(id) {
  const image = document.getElementById(id);
  var galarray = galeria.children;
  for (let index = 0; index < galarray.length; index++) {
    galeria.children[index].classList.remove("expand");
  } //quitar todas las clases expand de todos los elemtto
  if (image.classList.contains("expand")) {
    image.classList.remove("expand");
  } else {
    image.classList.add("expand");
  }
gal.addEventListener("mouseleave", ()=>{
  image.classList.remove("expand")
})
setTimeout(()=>{
  image.classList.remove("expand")

},5000)
}
gal.addEventListener("mouseover", ()=>{
  if(flag== 0){
    flag =1
    message.style.display = "flex"
    message.style.flexDirection = "column"
    message.style.placeContent = "center"
    message.style.gap = "10px"
     
     let button = document.createElement("button")
     button.innerText = "suka naxi"
     button.classList.add("button")
     button.setAttribute("onclick", "closeAd()")
     message.innerHTML = "<p>Prueba a Cliquear las Imagenes!</p>"
     message.style.color = "#fff"
     message.append(button)
  }
})
function closeAd(){
  message.style.display = "none"
}