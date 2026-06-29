import { useEffect, useState } from 'react'

const useTime = (): Date => {
	const [horaAtual, setHoraAtual] = useState(() => new Date())
	useEffect(() => {
		const id = setInterval(() => {
			setHoraAtual(new Date())
		}, 1000)
		return () => clearInterval(id)
	}, [])
	return horaAtual
}

export default function Time() {
	const timeAtual = useTime()
	return <div>{timeAtual.toLocaleTimeString()}</div>
}
