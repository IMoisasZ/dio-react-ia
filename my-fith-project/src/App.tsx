import './App.css'
import { Button } from './components/Button'
import { Post } from './components/Post'
import { SwitchThemeButton } from './components/SwitchThemeButton'

function App() {
	function handleHoursButtonClick() {
		const currentDateTime = new Date()
		alert(
			`Agora são ${currentDateTime.getHours()} horas, ${currentDateTime.getMinutes() < 10 ? '0' + currentDateTime.getMinutes() : currentDateTime.getMinutes()} minutos e ${currentDateTime.getSeconds()} segundos`,
		)
	}

	return (
		<div onClick={() => alert('Envento do APP disparado!')}>
			<h3>Selecione seu tema preferdo:</h3>
			<SwitchThemeButton theme='light'>☀️</SwitchThemeButton>
			<SwitchThemeButton theme='dark'>🌙</SwitchThemeButton>
			<Button onClick={handleHoursButtonClick}>⌚ Que horas são?</Button>
			<Post
				imageSource='https://images.unsplash.com/photo-1615233500064-caa995e2f9dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FjaG9ycm8lMjBnb2xkZW58ZW58MHx8MHx8fDA%3D'
				alternative='Golden Retriver filhote'
				user='goldelicia'
				text='Hoje foi dia de bircar com a mamãe'
				onLikePost={() => alert('Você curtiu a postagem de @goldelicia')}
			/>

			<Post
				imageSource='https://images.unsplash.com/photo-1592924728350-f7d4fd5d1655?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FjaG9ycm8lMjBwZXF1ZW5vJTIwcG9ydGV8ZW58MHx8MHx8fDA%3D'
				alternative='Cachorro de pequeno porte SDR'
				user='princesa'
				text='Fingindo demencia para a mamãe'
				onLikePost={() => alert('O post da princesa foi curtido')}
			/>
		</div>
	)
}

export default App
