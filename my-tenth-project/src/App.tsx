/** @format */

import './App.css'
import ClientListWithData from './components/ClientList/index.tsx'
import ProductListWithData from './components/ProductsList.tsx/index_hoc.tsx'

function App() {
	return (
		<div>
			<>
				<ProductListWithData />
				<ClientListWithData />
			</>
		</div>
	)
}

export default App
