/*const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show')
});
*/

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



// let showModal = () => {

//      document.getElementById('loginModal_container').classList.add("showLoginModal");

// }

// let closeModal = () => {
//     document.getElementById('loginModal_container').classList.remove("closeLoginModal");
// }