const bar = document.getElementById("bar");
const nav = document.getElementById("nav-div");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
