import Fuse from 'fuse.js';
import Receitas from '../data/receitas.json';

document.addEventListener("DOMContentLoaded", () => {
  const buttonSearch = document.getElementById("btSearch");
  const pesquisar = document.getElementById("search");
  const input = document.getElementById("inSearch");
  const resultado = document.getElementById("resultado");
  const form = document.getElementById("form");

  document.addEventListener("click", (e) => {
    if (!pesquisar.contains(e.target) && !buttonSearch.contains(e.target)) {
      resultado.classList.remove("block");
      resultado.classList.add("hidden")
    }
  });

  const fuse = new Fuse(Receitas, {
    keys: ['titulo', 'descricao']
  });

  let timeout;

  input.addEventListener("input", (e) => {
    e.preventDefault();
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      const valueInput = input.value.trim();
      const results = fuse.search(valueInput);
      resultado.innerHTML = "";

      if (valueInput.length > 2) {
        results.slice(0, 10).forEach((receita) => {
          resultado.classList.remove("hidden");
          resultado.classList.add("block");

          resultado.innerHTML += `<li class="mb-2 list-none"><a href=/${receita.item.slug}>${receita.item.titulo}</a></li>`
        })
      }
      else {
        resultado.classList.remove("block");
        resultado.classList.add("hidden");
      }
    }, 1000)
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  })
})
