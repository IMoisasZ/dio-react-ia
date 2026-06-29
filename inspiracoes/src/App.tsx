import './App.css'
import Copyright from './components/Copyright'
import FancyText from './components/FancyText'
import Time from './components/Hora'
import InspiratorGenerator from './components/InspirationGenerator'

function App() {
	return (
		<>
			<Time />
			<FancyText
				title
				text='App de Inspiração'
			/>
			<InspiratorGenerator>
				<Copyright year={2024} />
			</InspiratorGenerator>
		</>
	)
}

export default App
