import './App.css'

interface StepProps {
	step: number
	instruction: string
}

const stepsInstructions = [
	'Criar função do componente',
	'Exportar e importr a função criada',
	'Finalizar a estrutura do componente',
	'Adicionar interações',
	'Testar sua aplicação',
]

function Step({ step, instruction }: StepProps) {
	return (
		<li>
			Passo: {step} {instruction}
		</li>
	)
}

function App() {
	const steps = []

	for (let i = 1; i <= stepsInstructions.length; i++) {
		steps.push(
			<Step
				key={i}
				step={i}
				instruction={stepsInstructions[i - 1]}
			/>,
		)
	}

	return (
		<>
			<h1>Estrutura de um componente</h1>
			<ul>{steps}</ul>
		</>
	)
}

export default App
