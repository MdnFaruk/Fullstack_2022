const Persons = ({getFilterName, deleteName }) => {
   return (<>
        {getFilterName.map(person => <p key={person.id}>{person.name} {person.number}
            <button onClick={deleteName} value={person.id} name={person.name}>delete</button></p>)}
    </>)
}

export default Persons
