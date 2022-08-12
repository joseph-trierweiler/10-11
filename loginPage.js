

const loginModal = document.getElementById("logInPage");


const loginContainerModal = document.getElementById("loginModal_container");


const closeLoginModal = document.getElementById("closeModalBtn");


loginModal.addEventListener('click', () => {

    loginContainerModal.classList.add('showLoginModal');

});


closeLoginModal.addEventListener('click', () => {

    loginContainerModal.classList.remove('showLoginModal');

});
