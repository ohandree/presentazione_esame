const modal = document.getElementById("popup");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".chiudi");

openBtn.onclick = () => {
  modal.style.display = "block";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

function retro(numero) {
  var maglia = document.getElementById("maglia" + numero);
  var pantalone = document.getElementById("pantalone" + numero);
  var felpa = document.getElementById("felpa" + numero);
  
  if(maglia) maglia.src = "img/maglia" + numero + "-retro.png";
  if(pantalone) pantalone.src = "img/pantalone" + numero + "-retro.png";
  if(felpa) felpa.src = "img/felpa" + numero + "-retro.png";
}

function reset(numero) {
  var maglia = document.getElementById("maglia" + numero);
  var pantalone = document.getElementById("pantalone" + numero);
  var felpa = document.getElementById("felpa" + numero);
  
  if(maglia) maglia.src = "img/maglia" + numero + ".png";
  if(pantalone) pantalone.src = "img/pantalone" + numero + ".png";
  if(felpa) felpa.src = "img/felpa" + numero + ".png";
}


