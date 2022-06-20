import React from 'react';
import './App.css';
import {TodoList, TasksType} from "./components/TodoList";

const tasks: Array<TasksType> = [
    {id: 1, title: "HTML", isDone: true},
    {id: 2, title: "CSS", isDone: false},
    {id: 3, title: "JS", isDone: true}
]

const tasks2: Array<TasksType> = [
    {id: 1, title: "React", isDone: true},
    {id: 2, title: "Vue", isDone: false},
    {id: 3, title: "Angular", isDone: false}
]

function App() {
    return (
        <div className="App">
            <TodoList title={"ToDoList 1"} tasks={tasks}/>
            <TodoList title={"ToDoList 2"} tasks={tasks2}/>
        </div>
    );
}

export default App;