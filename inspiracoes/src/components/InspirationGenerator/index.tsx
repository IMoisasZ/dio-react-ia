import { useState } from 'react'
import inspirations from '../../data/inspirations'
import FancyText from '../FancyText'

export default function InspiratorGenerator({
	children,
}: React.PropsWithChildren) {
	const [index, setIndex] = useState(0)

	const inspiration = inspirations[index]

	const handleClick = () => {
		// setIndex((index + 1) % inspirations.length) //Pegando uma frase após a outra na sequencia
		setIndex(Math.floor(Math.random() * 9) + 1) //Pegando uma frase aleatória
	}

	return (
		<>
			<p>Sua frase motivacional é:</p>

			{inspiration.type === 'quote' && <FancyText text={inspiration.value} />}

			<button
				className='button'
				onClick={handleClick}>
				Me inspire novamente
			</button>

			{children}
		</>
	)
}
