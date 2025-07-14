const PORT = 3000;
const ENDPOINT = 'http://localhost:3000/api/menu';
const THANKS_ENDPOINT = 'http://localhost:3000/thanks';

const btn_submit = document.querySelector('#button-submit');
const foods = document.querySelector('#foods');

window.addEventListener('load', async () => {
    try {
        let cards = '';
        const response = await axios.get(ENDPOINT);

        for (let i = 0; i <= response.data.counter; i++) {
            const { name, ingredients } = response.data.menu[i];
            cards += `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">${ingredients}</p>
                    </div>
                </div>
            `
        }

        foods.innerHTML = cards;
    } catch (error) {
        console.error(error);
    }
});

btn_submit.addEventListener('click', async (event) => {
    event.preventDefault();

    const body = {
        name: document.querySelector('#input-name').value,
        ingredients: document.querySelector('#input-ingredients').value
    }

    try {
        const { data } = await axios.post(ENDPOINT, body, { headers: { 'Content-Type': 'application/json' } });
        if (data == 'Created')
            window.location.href = THANKS_ENDPOINT;   
    } catch (error) {
        console.error(error);
    }
}); 