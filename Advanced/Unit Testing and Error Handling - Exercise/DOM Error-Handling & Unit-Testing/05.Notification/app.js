function notify(message) {
    // get the div element with the class of hidden
    const notification = document.querySelector('#notification');

    // show the message to the user
    notification.textContent = message;
    notification.style.display = 'block';

    // hide the message when the user clocks the div
    notification.addEventListener('click', () => {
        notification.style.display = 'none';
    });
}
