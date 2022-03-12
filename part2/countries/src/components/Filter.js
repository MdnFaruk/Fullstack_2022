const Filter = ({filteredCountry,handleFilterCountry}) => {
    return (
    <>
        find countries <input value={filteredCountry} onChange={handleFilterCountry} />
    </>
    )
}
export default Filter