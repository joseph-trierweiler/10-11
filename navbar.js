const menuBtn = document.querySelector(".nav-menu-icon");
let menuOpen = false;
const dropdownContainer = document.getElementById("dropdown-container");

const dropdownHtml = `<span id="nav-links-container-dropdown"> 
<div><a class="nav-links" href="">Menu</a></div>
<div><a class="nav-links" href="">Rewards</a></div>
<div><a class="nav-links" href="">Locations</a></div>
<div><a class="nav-links" href="">Careers</a></div>
<div><a class="nav-links" href="">About Us</a></div>
<hr id="dropdown-line" />
<div><a class="nav-links" href="">Login</a></div>
<div><a class="nav-links" href="">Sign Up</a></div>
<div class="nav-links">&nbsp;</div>
<div><a id="nav-order-btn-dropdown" href="">Order Now</a></div>
</span>`;

menuBtn.addEventListener("click", () => {
  dropdownContainer.innerHTML = dropdownHtml;
  const dropdown = document.querySelector("#nav-links-container-dropdown");

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
