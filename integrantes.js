const integrantes = [
  {
    nombre: "Julian Huerfano",
    trabajo_realizado : "Realice la maquetacion del proyecto y la inclusion del footer en js  ",
    edad: 28,
    ciudad: "Bogota D.C.",
    foto: "https://scontent.fbog3-1.fna.fbcdn.net/v/t1.18169-9/13221457_10208411732785389_8233495547711985480_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=174925&_nc_eui2=AeE-6F62ce7l6NlR47aLjH1rjoFe402ehoeOgV7jTZ6Gh7AaTNyebskVJHJtYOycNOg&_nc_ohc=IO-QiUz_Rm8AX9BVmFq&_nc_ht=scontent.fbog3-1.fna&oh=00_AT8fvjMtzMm75jRV_InHVvdBkap1U2SZTgt3Wo4rIqYWVQ&oe=626852FF"

  },
  {
    nombre: "Angie Gordillo",
    trabajo_realizado : " Realice los estilos de search, y el mostrar los personajes, Habia programado anteriormente en la parte de Backend con PHP con Framework como Laravel y he manejado CMR tales como Wordpress y Umbraco este ultimo manejado con C#",
    edad: "20 Años",
    ciudad: "Bogota D.C",
    foto: "https://res.cloudinary.com/dgzfc4clj/image/upload/v1648671106/me_iakxsc.jpg"

  },
  {
    nombre: "Sara Sofia",
    trabajo_realizado : "",
    edad: "22 años",
    ciudad: "Caldas, Antioquia",
    foto: ""

  },
  {
    nombre: "4",
    trabajo_realizado : "",
    edad: 28,
    ciudad: "",
    foto: ""

  },
]


let footer = document.querySelector("footer")

integrantes.forEach(e => {
  footer.innerHTML += 
  `<div class="card" style="width: 18rem;">
    <img src="${e.foto} " class="card-img-top" width= "100%">
    <div class="card-body">
      <h5 class="card-title">Nombre: ${e.nombre} </h5>
      <p class="card-text">${e.trabajo_realizado} </p>
      <p class="card-text">Edad: ${e.edad} años </p>
      <p class="card-text">Ciudad: ${e.ciudad} </p>
    </div>
  </div>`
});


