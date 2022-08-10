const menuBtn = document.querySelector(".nav-menu-icon");
const dropdown = document.querySelector("#nav-links-container-dropdown");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    dropdown.style.display = "block";
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    dropdown.style.display = "none";
  }
});
