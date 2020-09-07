const BASE_URL = 'https://send-messages-mickael.herokuapp.com/'
const form = document.querySelector('form')

const formSubmit = form.addEventListener('submit', async event => {
	event.preventDefault();

	const name = document.querySelector('#name').value
	const email = document.querySelector('#email').value
	const message = document.querySelector('#message').value

	const params = {
		name,
		email,
		message
	}

	try {
		const res = await axios.post(`${BASE_URL}/send`, params)

		console.log(res)
	} catch(e) {
		console.error("Olha ae: ", e)
	}
})