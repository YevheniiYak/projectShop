import React from "react";

class MessageField extends React.Component{
    render(){
        return(
            <div>
                <span>Message is {this.props.value}</span>
                <button onClick={(event) => this.props.addNewTask(event.target.parentNode.nextElementSibling.lastChild.value)}>Add</button>
            </div>
        )
    }
}

export default MessageField 