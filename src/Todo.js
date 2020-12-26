import React from 'react'
import { Button, List, ListItem, ListItemText } from '@material-ui/core'
import db from './firebase'
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp'



const Todo = (props) => {
    const updateTodo = () => {
        let tmp = prompt(props.todo.todo + '(Enter New Task)');
        if (!tmp)
            updateTodo(props)
        else
            db.collection('todos').doc(props.todo.id).set({ todo: tmp }, { merge: true })
    }

    return (
        <List class="todo_list">
            <ListItem>
                <ListItemText primary={props.todo.todo} secondary="Dummy TimeLine ⏰" />
            </ListItem>
            <button onClick={e => updateTodo()}>Edit</button>
            <DeleteForeverSharpIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
        </List>
    )
}

export default Todo;