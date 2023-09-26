document.addEventListener('DOMContentLoaded', function () {
const notifyButton = document.getElementById('notify-button');
const notifyModal = document.getElementById('notify-modal');
const notifyModalOverlay = document.getElementById('notify-modal-overlay');
const closeNotifyModalButton = document.getElementById('close-notify-modal');
const subscribeButton = document.getElementById('subscribe-button');

function showNotifyModal() {
    notifyModal.style.display = 'block';
    notifyModalOverlay.style.display = 'block';
}

function closeNotifyModal() {
    notifyModal.style.display = 'none';
    notifyModalOverlay.style.display = 'none';
}

function showAlert() {
    alert("You are now subscribed!");
    closeNotifyModal();
}

// Add a click event listener to the "Notify Me" button
notifyButton.addEventListener('click', showNotifyModal);

// Add a click event listener to the close button
closeNotifyModalButton.addEventListener('click', closeNotifyModal);

// Close the modal if the user clicks outside the modal
notifyModalOverlay.addEventListener('click', closeNotifyModal);

// Add a click event listener to the "Subscribe" button
subscribeButton.addEventListener('click', showAlert);


});