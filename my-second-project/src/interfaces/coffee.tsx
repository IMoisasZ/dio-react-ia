export interface CoffeeProps {
	imageSrc: string
	imageSize?: number
	coffee: {
		name: string
		description: string
		preparationTime?: number
	}
}
