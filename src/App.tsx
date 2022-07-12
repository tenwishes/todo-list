import React, {useState} from 'react';
import {v1} from "uuid";
import './App.css';
import {TodoList, TasksType} from "./components/TodoList";

export type FilterValuesType = "all" | "active" | "completed"

export function App() {

    const data: Array<TasksType> = [
        {id: v1(), title: "HTML", isDone: true},
        {id: v1(), title: "CSS", isDone: false},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "Python", isDone: false},
        {id: v1(), title: "Java", isDone: false},
        {id: v1(), title: "C#", isDone: true},
        {id: v1(), title: "Kotlin", isDone: true},
        {id: v1(), title: "C++", isDone: false},
        {id: v1(), title: "1C", isDone: false},
        {id:  v1(), title: "Haskell", isDone: false},
        {id:  v1(), title: "Swift", isDone: false},
        {id:  v1(), title: "Rust", isDone: false},
        {id:  v1(), title: "Golang", isDone: false},
        {id:  v1(), title: "C", isDone: false}
    ]

    const [tasks, setTasks] = useState(data);

    const removeTask = (id: string) => {
        let new_tasks = tasks.filter((task) => {
            return task.id !== id
        })
        setTasks(new_tasks)
    }
    const addTask = (title: string) => {
        let newTask = {id: v1(), title: title, isDone: false}
        let new_tasks = [newTask, ...tasks]
        setTasks(new_tasks)
    }
    const changeStatus = (id: string, isDone: boolean) => {
        let task = tasks.find(t => t.id === id)
        if(task) {
            task.isDone = isDone
        }
        setTasks([...tasks])
    }

    let [filter, setFilter] = useState<FilterValuesType>("all")
    let taskForRender;
    switch (filter) {
        case "completed":
            taskForRender = tasks.filter(task => task.isDone === true)
            break
        case "active":
            taskForRender = tasks.filter(task => task.isDone === false)
            break
        default:
            taskForRender = tasks
    }
    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }

    return (
        <div className="App">
            <TodoList
                title={"Programming languages"}
                tasks={taskForRender}
                removeTask={removeTask}
                addTask={addTask}
                changeStatus={changeStatus}
                changeFilter={changeFilter}
                filter={filter}
            />
        </div>
    );
}