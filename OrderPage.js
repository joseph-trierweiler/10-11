const OpenOrderModal = document.getElementById("OrderNowBtn");
const OrderModal = document.getElementById("OrderModalContainer");
const CloseOrderModal = document.getElementById("CloseOrderBtn");

OpenOrderModal.addEventListener('click', () => {
    OrderModal.classList.add('showOrderNowModal');
});

CloseOrderModal.addEventListener('click', () => {
    OrderModal.classList.remove('showOrderNowModal');
});