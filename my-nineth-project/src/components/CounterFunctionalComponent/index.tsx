import { useState } from 'react'

interface Props {
	message: string
}

export default function CounterFunctionalComponent({ message }: Props) {
	const [count, setCount] = useState(0)

	function increase() {
		setCount(count + 1)
	}

	function resetarContador() {
		setCount(0)
	}

	return (
		<div>
			<h1>{message}</h1>
			<h2>Contador: {count}</h2>
			<div className='buttons'>
				<button
					className='button'
					onClick={increase}>
					Adicionar
				</button>
				<button
					className='button'
					onClick={resetarContador}>
					Resetar Contador
				</button>
			</div>
		</div>
	)
}
