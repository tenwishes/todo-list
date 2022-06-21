import React, {useState} from 'react';
import './App.css';
import {TodoList, TasksType} from "./components/TodoList";

// const tasks2: Array<TasksType> = [
//     {id: 1, title: "React", isDone: false},
//     {id: 2, title: "Vue", isDone: true},
//     {id: 3, title: "Angular", isDone: false},
//     {id: 4, title: "Redux", isDone: false},
//     {id: 5, title: "Flutter", isDone: true}
// ]

function App() {

    let initTasks: Array<TasksType> = [
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "CSS", isDone: false},
        {id: 3, title: "JS", isDone: true},
        {id: 4, title: "Python", isDone: false},
        {id: 5, title: "Java", isDone: false},
        {id: 6, title: "C#", isDone: true},
        {id: 7, title: "Kotlin", isDone: true}
    ]
    const [tasks, setTasks] = useState(initTasks);

    const deleteTask = (id: number) => {
        let newTasks = tasks.filter((task) => {
            return task.id !== id
        })
        setTasks(newTasks)
    }

    return (
        <div className="App">
            <TodoList
                title={"Tech"}
                tasks={tasks}
                deleteTask={deleteTask}
            />
        </div>
    );
}

export default App;