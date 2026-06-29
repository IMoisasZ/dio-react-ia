import './App.css'

function App() {
	return (
		<form
			action=''
			onSubmit={(e) => {
				e.preventDefault()
				alert('O formulário foi enviado')
			}}>
			<input
				type='email'
				name='e-mail'
				id=''
			/>
			<button type='submit'>Enviar</button>
		</form>
	)
}

export default App
