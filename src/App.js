import { Button, TextField } from '@material-ui/core';
import { useEffect, useState } from 'react'
import './App.css';
import Todo from './Todo'
import db from './firebase'
import firebase from 'firebase'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  //when the app loads, we fetch all todos
  useEffect(() => {
    db.collection("todos").orderBy('timeStamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({
        id: doc.id,
        todo: doc.data().todo
      })))
    })
  }, [])

  const addTodo = (event) => {
    event.preventDefault();
    db.collection('todos').add({
      todo: input,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setTodos([...todos, input])
    setInput('')
  }
  return (
    <div className="App">
      <h1>ToDo App With Firebase📄</h1>
      <form>
        <TextField size="small" id="outlined-basic" label="Task" variant="outlined"
          value={input} onChange={event => setInput(event.target.value)} />
        <Button type="submit" size="large" disabled={!input} variant="contained" color='primary' onClick={addTodo}>
          Add ToDo
        </Button>
      </form>
      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
