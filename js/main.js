document.addEventListener("DOMContentLoaded", () => {
  const proyectos = {
    "proyecto-eog": [
      "./assets/proyectos/loginEOG.png",
      "./assets/proyectos/MenuEOG.png",
      "./assets/proyectos/Menu3EOG.png",
      "./assets/proyectos/menu5EOG.png"
    ],
    "proyecto-foodstore": [
      "./assets/proyectos/Food1.png",
      "./assets/proyectos/Food2.png",
      "./assets/proyectos/Food3.png",
      "./assets/proyectos/Food4.png",
    ]
  };

  document.querySelectorAll(".app").forEach(app => {
    app.addEventListener("click", () => {
      const id = app.id;
      const contenedor = app.querySelector(".capturas");
      if (contenedor.childElementCount > 0) {
        contenedor.innerHTML = "";
        return;
      }
      contenedor.innerHTML = proyectos[id]
        .map(src => `<img src="${src}" alt="Captura de ${id}">`)
        .join("");
    });
  });
});

//Modo oscuro
 const btnModoOscuro = document.getElementById('modoOscuroBtn');
const btnModoOscuroMovil = document.getElementById('modoOscuroBtnMovil');
const body = document.body;

if (localStorage.getItem('modoOscuro') === 'true') {
  body.classList.add('dark-mode');
  btnModoOscuro.textContent = '☀️';
  btnModoOscuroMovil.textContent = '☀️';
}

function toggleModoOscuro() {
  const modoOscuroActivo = body.classList.toggle('dark-mode');
  localStorage.setItem('modoOscuro', modoOscuroActivo);
  const icono = modoOscuroActivo ? '☀️' : '🌙';
  btnModoOscuro.textContent = icono;
  btnModoOscuroMovil.textContent = icono;
}

btnModoOscuro.addEventListener('click', toggleModoOscuro);
btnModoOscuroMovil.addEventListener('click', toggleModoOscuro);

const menuToggle = document.getElementById("menuToggle");
const menuList = document.getElementById("menuList");

menuToggle.addEventListener("click", () => {
  menuList.classList.toggle("active");
});
