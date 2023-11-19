const Filter = (props) => {
    return (
        <>
            <div>
                filter by country: <input value={props.value}
                onChange={props.onChange} />
            </div>
        </>
    )
}

export default Filter