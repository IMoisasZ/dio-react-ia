import './App.css'
import CounterClassComponent from './components/CounterClassComponent'
import CounterFunctionalComponent from './components/CounterFunctionalComponent'

function App() {
	return (
		<>
			<CounterFunctionalComponent message='Functional Component' />
			<hr />
			<CounterClassComponent message='Class Component' />
		</>
	)
}

export default App
