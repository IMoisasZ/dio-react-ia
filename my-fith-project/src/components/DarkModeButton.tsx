export function DarkModeButton() {
	function handleClick() {
		alert('Você selecionou o tema dark!')
	}
	return (
		<button
			className='button'
			onClick={handleClick}>
			🌙
		</button>
	)
}
