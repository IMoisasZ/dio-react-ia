/** @format */

import type { Client } from '../../interfaces/Client'

export default function ClientItem({ client }: { client: Client }) {
	return (
		<li>
			<p>
				#{client.id} {client.name}
			</p>
			<p>Client sex: {client.sex}</p>
			<p>Birthday: {Intl.DateTimeFormat('pt-BR').format(client.birthday)}</p>
		</li>
	)
}
