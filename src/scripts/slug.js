document.addEventListener("DOMContentLoaded", () => {
  const check = document.querySelectorAll("#checkLi");

  check.forEach((item) => {
    const [checkbox, texto] = item.children;
    checkbox.addEventListener("change", (e) => {
      texto.classList.toggle('line-through', e.target.checked)
    })
  })
})
