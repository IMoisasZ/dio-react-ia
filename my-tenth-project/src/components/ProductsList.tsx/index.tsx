/** @format */

import { useEffect, useState } from 'react'
import { API_BASE_URL } from '../../settings'
import ProductItem from '../ProductItem'
import type { Product } from '../../interfaces/product'

export default function ProductsList() {
	const [products, setProducts] = useState<Product[]>([])
	const [isLoading, setIsLoading] = useState<boolean>(true)

	useEffect(() => {
		fetch(`${API_BASE_URL}/api/products`)
			.then(async (response) => {
				if (!response.ok) {
					throw new Error("'An error ocurred when fetch products list'")
				}

				const data = await response.json()
				setProducts(data)
				setIsLoading(false)
			})
			.catch((error) => {
				alert(error.message)
				setIsLoading(false)
			})
	}, [])

	if (isLoading) {
		return (
			<div>
				<h2>Products</h2>
				<p>Loading data</p>
			</div>
		)
	}

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
