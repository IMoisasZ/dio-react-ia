interface ListDatails {
    name: string,
    day: React.ReactNode
}

export function List() {
    const listDatails:ListDatails = {
        name: 'Moisés',
        day: formatDate(new Date())
    }

    function formatDate(date:Date):React.ReactNode{
        return new Intl.DateTimeFormat('pt-BR', {weekday:'long'}).format(date)
    }

    const list = ['Banana','Maçã', 'Couve', 'Alface', 'Tomate', 'Batata']

    return (
        <>
            <h2>Lista de compras do {listDatails.name}</h2>
            <p><b>Dia da feira:</b> {listDatails.day}</p>
            <ul style={{color: 'pink', backgroundColor: "black", textAlign: 'left'}}>
               {list.map(lst => (
                <li>{lst}</li>
               ))}
            </ul>
        </>
    )
}