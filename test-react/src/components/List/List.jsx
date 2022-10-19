import React from "react";

class List extends React.Component{
    render() {
        return(
            <div>
                <ol>
                    {this.props.tasks.map(task =>
                        <li key={task.id} id={task.id}>
                            <span>{task.text}</span>
                            <input type="checkbox" />
                            <button onClick={(event) => this.props.deleteTask(task.id)}>Delete</button>
                        </li>
                    )}
                </ol>
            </div>
        )
    }
}

export default List