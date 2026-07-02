/** @format */

import { Component } from 'react'
import { API_BASE_URL } from '../../settings'

interface DataFetchingState<T> {
	data: T[]
	isLoading: boolean
	error: string
}

const withDataFetching = <T, P extends { data: T[] }>(
	title: string,
	WrapperComponent: React.ComponentType<P>,
	endpoint: string,
) => {
	return class extends Component<Omit<P, 'data'>, DataFetchingState<T>> {
		constructor(props: Omit<P, 'data'>) {
			super(props)
			this.state = {
				data: [],
				isLoading: true,
				error: '',
			}
		}

		async componentDidMount(): Promise<void> {
			try {
				const response = await fetch(`${API_BASE_URL}${endpoint}`)

				if (!response.ok) {
					throw new Error('An error occured while fetchng the data')
				}
				const data = await response.json()
				this.setState({
					data,
					isLoading: false,
				})
			} catch (error) {
				console.error(`ERROR: Fetching data on ${endpoint}`, error)
				this.setState({
					error: 'An error occured while fetchng the data',
					isLoading: false,
				})
			}
		}
		render() {
			const { data, isLoading, error } = this.state

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
					{...(this.props as unknown as P)}
					data={data}
				/>
			)
		}
	}
}

export default withDataFetching
