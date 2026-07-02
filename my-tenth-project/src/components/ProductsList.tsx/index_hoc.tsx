/** @format */

import ProductItem from '../ProductItem'
import withDataFetching from '../DataFetchingFunctionalComponents'

interface Product {
	id: number | string
	name: string
	price: number
	description: string
}

interface ProductsListProps {
	data: Product[]
}

const ProductsList: React.FC<ProductsListProps> = ({ data: products }) => {
	return (
		<div>
			<h2>Products:</h2>
			<ul className='list'>
				{products.map((item) => (
					<ProductItem
						product={item}
						key={item.id}
					/>
				))}
			</ul>
		</div>
	)
}

const ProductListWithData = withDataFetching(
	'Products',
	ProductsList,
	'/api/products',
)

export default ProductListWithData
