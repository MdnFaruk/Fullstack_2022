const Filter = ({filteredName,handleFilterName}) => {
    return (
    <>
        filter shown with: <input value={filteredName} onChange={handleFilterName} />
    </>
    )
}
export default Filter