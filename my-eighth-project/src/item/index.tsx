import { useState } from 'react'

interface Props {
	name: string
	check?: boolean
	count?: number
}

export const Item: React.FC<Props> = ({ name, check, count }) => {
	const [isChecked, setCheck] = useState(check)

	const handleClick = () => {
		setCheck(!isChecked)
	}
	// if (check) {
	// 	return (
	// 		<div className='item'>
	// 			✅ <del>{name}</del>
	// 		</div>
	// 	)
	// }
	// return <div className='item'>⬜ {name}</div>
	let itemName: React.ReactNode = name

	if (isChecked) {
		itemName = <del>{name}</del>
	}
	return (
		<div
			className='item'
			onClick={handleClick}>
			{isChecked ? '✅' : '⬜'} {!!count && `(${count})`} {itemName}
		</div>
	)
}
