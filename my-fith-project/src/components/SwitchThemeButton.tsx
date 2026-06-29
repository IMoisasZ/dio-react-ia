import type { PropsWithChildren } from 'react'
import { Button } from './Button'

interface Props {
	theme: 'dark' | 'light'
}

export function SwitchThemeButton({
	theme,
	children,
}: PropsWithChildren<Props>) {
	function handleClick() {
		const shouldChangeTheme = confirm(`Você selecionou o tema ${theme}`)
		if (!shouldChangeTheme) {
			return
		}
		document.body.classList.add(`${theme}-theme`)
		const themeToRemove = theme === 'light' ? 'dark' : 'light'
		document.body.classList.remove(`${themeToRemove}-theme`)
	}

	return <Button onClick={handleClick}>{children}</Button>
}
