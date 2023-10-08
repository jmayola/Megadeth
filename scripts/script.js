const menu = document.getElementById("nav__icon");
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
  }
  if (image.classList.contains("expand")) {
    console.log(image.classList);
  } else {
    image.classList.toggle("expand");
  }
gal.addEventListener("mousedown", ()=>{
  image.classList.remove("expand")

})
}
gal.addEventListener("mouseover", ()=>{
  console.log("holaaa")
  if(flag== 0){
    flag =1
    alert("Prueba a cliquear las imagenes!")
  }
})
