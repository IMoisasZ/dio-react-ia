/** @format */

import withDataFetching from '../DataFetchingFunctionalComponents'

import type { Client } from '../../interfaces/Client'
import ClientItem from '../ClientItem'

interface ClientListProps {
	data: Client[]
}

const ClientList: React.FC<ClientListProps> = ({ data: clients }) => {
	return (
		<div>
			<h2>Clients:</h2>
			<ul className='list'>
				{clients.map((item) => (
					<ClientItem
						client={item}
						key={item.id}
					/>
				))}
			</ul>
		</div>
	)
}

const ClientListWithData = withDataFetching(
	'Clients',
	ClientList,
	'/api/clients',
)

export default ClientListWithData
