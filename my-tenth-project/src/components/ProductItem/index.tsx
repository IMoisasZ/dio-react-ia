import type { Product } from '../../interfaces/product'

export default function ProductItem({ product }: { product: Product }) {
	return (
		<li>
			<p>
				#{product.id} {product.name}
			</p>
			<p className='price'>${product.price}</p>
			<p>{product.description}</p>
		</li>
	)
}
