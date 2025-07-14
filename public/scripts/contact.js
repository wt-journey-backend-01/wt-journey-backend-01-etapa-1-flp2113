const PORT = 3000;
const ENDPOINT = 'http://localhost:3000/api/contact';
const THANKS_ENDPOINT = 'http://localhost:3000/thanks';

document.querySelector('#submit-button').addEventListener('click', async (event) => {
    event.preventDefault();

    const body = {
        name: document.querySelector('#input-name').value,
        email: document.querySelector('#input-email').value,
        subject: document.querySelector('#input-subject').value,
        message: document.querySelector('#input-message').value
    }

    const { data } = await axios.post(ENDPOINT, body, { headers: { 'Content-Type': 'application/json' } });   
    if (data == 'Created')
        window.location.href = THANKS_ENDPOINT;
}); 