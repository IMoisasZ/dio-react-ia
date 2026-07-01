import { useEffect, useState } from 'react'
import { API_BASE_URL } from '../../settings'
import type { Product } from '../../interfaces/product'

const withDataFetching = (
	title: string,
	WrapperComponent: React.FC,
	endpoint: string,
) => {
	return () => {
		const [data, setData] = useState<Product[]>([])
		const [isLoading, setIsLoading] = useState<boolean>(true)
		const [error, setError] = useState<string>('')
		useEffect(() => {
			const fetchData = async () => {
				try {
					const response = await fetch(`${API_BASE_URL}${endpoint}`)

					if (!response.ok) {
						throw new Error('An error occured while fetchng the data')
					}

					const data = await response.json()
					setData(data)
					setIsLoading(false)
				} catch (error) {
					console.error(`ERROR: Fetching data on ${endpoint}`, error)
					setError('An error occured while fetchng the data')
					setIsLoading(false)
				}
			}
			fetchData()
		}, [])

		if (isLoading) {
			return (
				<div>
					<h2>{title}</h2>
					<p>🔄️ Searching list of data...</p>
				</div>
			)
		}

		if (error) {
			return (
				<div>
					<h2>{title}</h2>
					<p>⚠️ {error}</p>
				</div>
			)
		}

		if (data.length === 0) {
			return (
				<div>
					<h2>{title}</h2>
					<p>🤔 No data was found.</p>
				</div>
			)
		}

		return <WrapperComponent data={data} />
	}
}

export default withDataFetching
