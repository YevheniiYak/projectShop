
import './App.css';
import React from 'react';
import MessageField from './components/MessageField/MessageField';
import InputField from './components/InputField/InputField';
import List from './components/List/List';

// метод життєвого циклу, записати в стейт

class App extends React.Component {

  state = {
    messageValue: '',
    data: [
      {
        id: 1,
        text: 'buy book',
        isCompleted: false
      }
    ]
  }

  // handleChange = (value) => {
  //   console.log(value)
  //   // this.setState({
  //   //   messageValue: value
  //   // })
  // }

  // addNewTask = () => {
  //   this.setState(prevState => ({
  //     data:[
  //       ...prevState.data,
  //       {
  //         id: Math.floor(Math.random() * 10),
  //         text: prevState.messageValue,
  //         isCompleted: false
  //       },
  //     ],
  //   }))
  // }

  addNewTask = (value) => {
      this.setState({
      messageValue: value
      })
    let arr = {id: Math.floor(Math.random() * 1000),
      text: value,
      isCompleted: false}

      this.state.data.push(arr)
  }

 

  deleteTask = (id) => {
    // let id = parseInt(li.id)
    // let newData = this.state.data.filter(function(obj){
    //   if(obj.id !== id){
    //     return obj
    //   }
    // })
    this.setState(prevState => ({
      data: prevState.data.filter(item => item.id !== id)
    }))
  }

  // componentDidMount() {
  //   console.log(5)
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   .then(response => response.json())
  //   .then(json => { this.setState({value: json})}
  // },

  // servRequest = (value) => {
  //       console.log(this.state.messageValue)
  //       fetch('https://jsonplaceholder.typicode.com/todos/' + value)
  //       .then(response => response.json())
  //       .then(json => console.log(json))
  // }

  // метод життєвого циклу, якщо оюновлюється компонент, виводиться повідомлення в консоль

  // componentDidUpdate(prevState){
  //   if (this.state.messageValue !== prevState.messageValue){
  //     console.log('data has changed')
  //   }
  //   // shouldcomponentdidupadte

  // }

  render(){
    console.log(this.state.data)
    return ( 
      <div className="App">
        <MessageField value ={this.state.messageValue} addNewTask = {this.addNewTask}/>
        <InputField handleChange = {this.handleChange} servRequest = {this.servRequest}/>
        <List tasks = {this.state.data} deleteTask = {this.deleteTask} handleChange = {this.handleChange} />
      </div>
    );
  }
}

// .filter
export default App;
  




