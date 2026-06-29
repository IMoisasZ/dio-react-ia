import type { CoffeeProps } from '../interfaces/coffee'

export function Coffee({ imageSrc, coffee, imageSize = 170 }: CoffeeProps) {
	return (
		<>
			<img
				src={imageSrc}
				alt={coffee.name}
				width={imageSize}
			/>
			<h2 className='recipe-title'>{coffee.name}</h2>
			<p className='recipe-description'>{coffee.description}</p>
			<p className='recipe-description'>
				<b>Tempo de preparo:</b> {coffee.preparationTime} min
			</p>
		</>
	)
}
