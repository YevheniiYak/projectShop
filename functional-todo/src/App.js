
import {useState} from 'react'
import './App.css';
import MessageField from './components/MessageField/MessageField';
import InputField from './components/InputField/InputField';
import List from './components/List/list';

function App() {
  const [input, setInput] = useState('')
  let [task, setTask] = useState([])
  const [messageValue, setMessagevalue] = useState('')

  function inputValue (value){
    // input = value
    setInput(value)
  }

  function addTask(){
    let taskItem ={
      id: Math.floor(Math.random() * 1000),
      value: input,
      isCompleted: false
    }
    setTask([...task, taskItem])
    console.log(task)
  }

  return (
    <div className="App">
      {/* <p>{counter}</p> */}
      {/* <button onClick={() => setCounter(counter + 1)}>Click</button> */}
      <MessageField addTask = {addTask}/>
      <InputField messageValue = {messageValue} setMessagevalue = {setMessagevalue} inputValue = {inputValue}/>
      <List task = {task}/>
    </div>
  );
}

export default App;

// стоврити репозиторій і закинути файли в гіт з репозиторієм