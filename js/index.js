const url =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const images = "https://image.tmdb.org/t/p/w500";
const main = document.querySelector(".main");
const form = document.getElementById("formulario");

const obtenerPelis = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => verPelis(data.results));
};

obtenerPelis(url);

function verPelis(peliculas) {
  main.innerHTML = "";
  peliculas.map((peli) => {
    const { title, poster_path, overview } = peli;
    const elemento = document.createElement("div");
    elemento.classList.add("peli");
    elemento.innerHTML = ` 
        <div class="card">
        <img src="${images + poster_path}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${overview}</p>
          <a href="#" class="btn ">VER</a>
        </div>
      </div>
      `;
    main.appendChild(elemento);
  });
}

function almacenar() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let direccion = document.getElementById("direccion").value;
  let telefono = document.getElementById("telefono").value;
  let contraseña = document.getElementById("contraseña").value;

  localStorage.setItem("nombre", nombre);
  localStorage.setItem("apellido", apellido);
  localStorage.setItem("direccion", direccion);
  localStorage.setItem("telefono", telefono);
  localStorage.setItem("contraseña", contraseña);
}

//  async function obtenerPelis(url) {
//      const respuesta = await fetch(url);
//      const datos = await respuesta.json()
//      console.log(datos)
//}
