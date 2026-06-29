import { TopSaleCoffee } from './TopSaleCoffee'
import { v4 as uuidv4 } from 'uuid'

interface Coffess {
	id: string
	name: string
	description: string
	preparationTime: number
}
const coffees: Coffess[] = [
	{
		id: uuidv4(),
		name: 'Iced Caramel Macchiato',
		description: 'Rico e com toque de baunilha',
		preparationTime: 3,
	},
	{
		id: uuidv4(),
		name: 'Caffé Mocha',
		description: 'Um classico starbucks',
		preparationTime: 2,
	},
	{
		id: uuidv4(),
		name: 'Starbucks Blond Vanilla Late',
		description: 'Suave e aveludado',
		preparationTime: 2,
	},
	{
		id: uuidv4(),
		name: 'Sparking Expresso',
		description: 'Um toque brilhante',
		preparationTime: 1,
	},
	{
		id: uuidv4(),
		name: 'Affogato',
		description: 'Refrescante e equilibrado',
		preparationTime: 2,
	},
]

const topSale = ['Caffé Mocha', 'Affogato']

export function List() {
	//
	const listItems = coffees
		.filter((coffee) => !topSale.includes(coffee.name))
		.map((coffe) => <li key={coffe.id}>{coffe.name}</li>)
	const topSaleList = coffees.filter((coffee) => topSale.includes(coffee.name))

	return (
		<>
			<h3>Os cafés mais vendidos</h3>
			<div style={{ textAlign: 'left' }}>
				{topSaleList.map((coffe) => (
					<TopSaleCoffee
						key={coffe.id}
						name={coffe.name}
						description={coffe.description}
					/>
				))}
			</div>
			<h3>Outros cafes</h3>
			<ul style={{ textAlign: 'left' }}>{listItems}</ul>
		</>
	)
}
