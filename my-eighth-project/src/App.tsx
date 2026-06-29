import './App.css'
import { Item } from './item'

const itemList = [
	{ id: 'meias', name: 'Meias', check: true, count: 5 },
	{ id: 'escova-de-dente', name: 'Escova de dentes', check: false },
	{ id: 'pasta-de-dente', name: 'Meias', check: false },
	{ id: 'carregador-celular', name: 'Carregador de celular', check: true },
	{ id: 'blusa-frio', name: 'Blusa de frio', check: false, count: 3 },
	{ id: 'travesseiro', name: 'Travesseiro', check: true },
	{ id: 'camiseta', name: 'Camiseta', check: false, count: 5 },
]

function App() {
	return (
		<div className='list'>
			<h1>Itens para colocar na mala</h1>
			{itemList.map((item) => {
				return (
					<Item
						key={item.id}
						name={item.name}
						check={item.check}
						count={item.count}
					/>
				)
			})}
		</div>
	)
}

export default App
