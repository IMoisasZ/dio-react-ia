import React from 'react'

interface Props {
	message: string
}

class CounterClassComponent extends React.Component<Props, { count: number }> {
	constructor(props: Props) {
		super(props)
		this.state = {
			count: 0,
		}
	}

	increase = () => {
		this.setState({ count: this.state.count + 1 })
	}

	reset = () => {
		this.setState({ count: 0 })
	}

	render() {
		return (
			<div>
				<h1>{this.props.message}</h1>
				<h2>Contador: {this.state.count}</h2>
				<div className='buttons'>
					<button
						onClick={this.increase}
						className='button'>
						Adicionar
					</button>
					<button
						onClick={this.reset}
						className='button'>
						Resetar Contador
					</button>
				</div>
			</div>
		)
	}
}

export default CounterClassComponent
