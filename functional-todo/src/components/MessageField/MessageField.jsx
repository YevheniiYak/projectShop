function MessageField(props){
    return(
        <div>
            <span>Message is</span>
            <button onClick={props.addTask}>Add</button>
        </div>
    )
}

export default MessageField 