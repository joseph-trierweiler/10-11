

// grab order now button from DOM

const loginModal = document.getElementById("logInPage");

// grab the order now modal container from DOM

const loginContainerModal = document.getElementById("loginModal_container");

// grab close button (x) from DOM

const closeLoginModal = document.getElementById("closeModalBtn");



// add event listener to order now button

loginModal.addEventListener('click', () => {

    loginContainerModal.classList.add('showLoginModal');

});



// add event event listener to close (x) button

closeLoginModal.addEventListener('click', () => {

    loginContainerModal.classList.remove('showLoginModal');

});
