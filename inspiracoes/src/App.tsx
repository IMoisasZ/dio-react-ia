import './App.css'
import Copyright from './components/Copyright'
import FancyText from './components/FancyText'
import InspiratorGenerator from './components/InspirationGenerator'

function App() {
	return (
		<>
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
