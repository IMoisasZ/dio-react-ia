/** @format */

import { useEffect, useState } from 'react'
import { API_BASE_URL } from '../../settings'

const withDataFetching = <T, P extends { data: T[] }>(
	title: string,
	WrapperComponent: React.ComponentType<P>,
	endpoint: string,
) => {
	return (props: Omit<P, 'data'>) => {
		const [data, setData] = useState<T[]>([])
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

		return (
			<WrapperComponent
				{...(props as P)}
				data={data}
			/>
		)
	}
}

export default withDataFetching
