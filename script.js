const close = document.getElementById('close'); 
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active'); // Adds the 'active' class to the navbar
    });
}

if (close) {
    close.addEventListener('click', () => { // Attach listener to the 'close' button
        nav.classList.remove('active'); // Removes the 'active' class from the navbar
    });
}

