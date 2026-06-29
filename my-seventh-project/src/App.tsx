import './App.css'
import Item from './item'

function App() {
	return (
		<div className='list'>
			<h1>Itens para colocar na Mala</h1>
			<Item
				name='Meias'
				check
			/>
			<Item
				name='Escova de dentes'
				check
			/>
			<Item name='Pasta de dente' />
			<Item
				name='Carregador de celular'
				check
			/>
			<Item name='Blusa de frio' />
			<Item
				name='Travesseiro'
				check
			/>
		</div>
	)
}

export default App
