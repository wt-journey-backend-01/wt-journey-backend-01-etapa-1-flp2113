const counter = document.querySelector('#counter');

const HOMEPAGE_ENDPOINT = 'http://localhost:3000/'

setInterval(() => {
    counter.textContent = parseInt(counter.textContent) - 1;
    if (counter.textContent == 0)
        window.location.href = HOMEPAGE_ENDPOINT;
}, 1000);
