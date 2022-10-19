function List(props){
    return(
            <div>
                <ol>
                    {props.task.map(item =>
                        <li key={item.id} id={item.id}>
                            <span>{item.value}</span>
                            <input type="checkbox" />
                            <button>Delete</button>
                        </li>
                    )}
                </ol>
            </div>
        )
}

export default List