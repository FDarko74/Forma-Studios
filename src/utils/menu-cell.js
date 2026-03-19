const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", (e) => {
  e.stopPropagation(); // impede de fechar na hora do clique
  menu.classList.toggle("active");
});

// Fecha ao clicar fora
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target)) {
    menu.classList.remove("active");
  }
});
// fecha após clicar no link
menu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});
