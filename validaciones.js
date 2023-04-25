const api = async (inicio) => {
  let url = "https://rickandmortyapi.com/api/character/?page=" + inicio;
  const api = await fetch(url);
  const data = await api.json();
  console.log(data);
  // crear array con nombres de personajes
  let nombres = data.results.map((item) => item.name);
  //llamar las opciones del select con los nombres de los personajes
  let select = document.querySelector("#filtro");
  select.innerHTML = `
  <option value="todos">Todos</option>
  ${nombres
    .map((nombre) => `<option value="${nombre}">${nombre}</option>`)
    .join("")}
`;
  divResult = document.querySelector("#resultado");
  HTML = "";
  let count = 0;
  data.results.map((item) => {
    if (count < 18) {
      HTML += `<div class="card col-12 col-md-4">
<img src="${item.image}" alt="...">
  <div class="card-body">
  <h5 class="card-title">${item.name}</h5>
  <p class="card-text"><b>Estado: </b>${item.status}</p>
  <p class="card-text"><b>Especie: </b>${item.species}</p>
  <p class="card-text"><b>Tipo: </b>${item.type}</p>
  </div>
  </div>
  </div>`;

      count++;

      divResult.innerHTML = HTML
    }
  });
};
api(1);

let btnFiltrar = document.querySelector("#btn-filtrar");
btnFiltrar.addEventListener("click", () => {
  let select = document.querySelector("#filtro");
  console.log(select);
  let valor = select.value
  console.log(valor);
  let cards = document.querySelectorAll(".col-12");

  cards.forEach((card) => {
    if (
      valor === "todos" ||
      card.querySelector(".card-title").textContent === valor
    ) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});