const Filter = (props) => {
    return (
        <>
            <div className='filter'>
                filter by country: <input value={props.value}
                onChange={props.onChange} />
            </div>
        </>
    )
}

export default Filter