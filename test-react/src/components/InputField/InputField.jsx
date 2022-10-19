import React from "react";

class InputField extends React.Component {
    render() {
        return(
            <div>
                <label>Input</label>
                <input type="text"  />
                {/* <button onClick={ (event) => this.props.servRequest(event.target.previousElementSibling.value)}>Number</button> */}
            </div>
        )
    }
}

export default InputField 