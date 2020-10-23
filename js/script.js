const BASE_URL = 'https://send-messages-mickael.herokuapp.com/api'

// const BASE_URL = 'http://127.0.0.1:8000/api'

const form = document.querySelector('form')

let alertSuccess = document.getElementById('alert-success')
let alertDanger = document.getElementById('alert-danger')
let loadingSpinner = document.getElementById('loading-spinner')

const formSubmit = form.addEventListener('submit', async event => {
	event.preventDefault();

	form.classList.add("was-validated")

	if(form.checkValidity() === true) {
		const name = document.querySelector('#name').value
		const email = document.querySelector('#email').value
		const message = document.querySelector('#message').value

		const params = {
			name,
			email,
			message
		}
		
		loadingSpinner.classList.remove('hidden')
		loadingSpinner.scrollIntoView()
		alertDanger.classList.add('hidden')


		try {
			const res = await axios.post(`${BASE_URL}/send`, params)
			
			loadingSpinner.classList.add('hidden')
			alertSuccess.classList.remove('hidden')
			alertSuccess.scrollIntoView()

			console.log("Foi: ", res)
		} catch(e) {
			loadingSpinner.classList.add('hidden')
			alertDanger.classList.remove('hidden')
			alertDanger.scrollIntoView()

			console.log("Olha ae: ", e)
		}		
	}	
})