import React, {useState} from 'react';
import './App.css';
import {TodoList, TasksType} from "./components/TodoList";

export type FilterValuesType = "all" | "active" | "completed"

export function App() {

    const data: Array<TasksType> = [
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "CSS", isDone: false},
        {id: 3, title: "JS", isDone: true},
        {id: 4, title: "Python", isDone: false},
        {id: 5, title: "Java", isDone: false},
        {id: 6, title: "C#", isDone: true},
        {id: 7, title: "Kotlin", isDone: true},
        {id: 8, title: "C++", isDone: false},
        {id: 9, title: "1C", isDone: false},
        {id: 10, title: "Haskell", isDone: false},
        {id: 11, title: "Swift", isDone: false},
        {id: 12, title: "Rust", isDone: false},
        {id: 13, title: "Golang", isDone: false},
        {id: 14, title: "C", isDone: false}
    ]
    const [tasks, setTasks] = useState(data);
    const removeTask = (id: number) => {
        let new_tasks = tasks.filter((task) => {
            return task.id !== id
        })
        setTasks(new_tasks)
    }

    let [filter, setFilter] = useState<FilterValuesType>("all")
    let tasks_for_render;
    switch (filter) {
        case "completed":
            tasks_for_render = tasks.filter(task => task.isDone === true)
            break
        case "active":
            tasks_for_render = tasks.filter(task => task.isDone === false)
            break
        default:
            tasks_for_render = tasks
    }
    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }

    return (
        <div className="App">
            <TodoList
                title={"Languages"}
                tasks={tasks_for_render}
                changeFilter={changeFilter}
                removeTask={removeTask}
            />
        </div>
    );
}