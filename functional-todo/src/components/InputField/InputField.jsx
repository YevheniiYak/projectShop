function InputField(props){
    return(
      <div>
        <label>Input</label>
        <input type="text" onChange={(e) => props.inputValue(e.target.value)} />
        {/* <button onClick={ (event) => this.props.servRequest(event.target.previousElementSibling.value)}>Number</button> */}
      </div>
    )
}

export default InputField