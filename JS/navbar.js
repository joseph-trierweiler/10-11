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
// highlight js
const currentWindow = location.href;
const NavItem = document.querySelectorAll("a");
const navItemLength = NavItem.length;
for (let i = 0; i < navItemLength; i++) {
  if (NavItem[i].href === currentWindow) {
    NavItem[i].className = "active";
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

const loginModal = document.getElementById("logInPage");

const loginContainerModal = document.getElementById("loginModal_container");

const closeLoginModal = document.getElementById("closeModalBtn");

loginModal.addEventListener("click", () => {
  loginContainerModal.classList.add("showLoginModal");
});

closeLoginModal.addEventListener("click", () => {
  loginContainerModal.classList.remove("showLoginModal");
});
