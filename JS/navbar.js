const menuBtn = document.querySelector(".nav-menu-icon");
let menuOpen = false;
const dropdownContainer = document.getElementById("dropdown-container");
const dropdown = document.querySelector("#nav-links-container-dropdown");

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

const currentLocation = location.href;
const menuItem = document.querySelectorAll("a");
const menuLength = menuItem.length;
for (let i = 0; i < menuLength; i++) {
  if (menuItem[i].href === currentLocation) {
    menuItem[i].className = "active";
  }
}

// modal

const OpenOrderModal = document.getElementById("OrderNowBtn");
const OrderModal = document.getElementById("OrderModalContainer");
const CloseOrderModal = document.getElementById("CloseOrderBtn");

OpenOrderModal.addEventListener("click", () => {
  OrderModal.classList.add("showOrderNowModal");
  console.log("hey");
});

CloseOrderModal.addEventListener("click", () => {
  OrderModal.classList.remove("showOrderNowModal");
});

// login JS
