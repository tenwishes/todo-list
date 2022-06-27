import React from "react";
import {FilterValuesType} from '../App'

export type TasksType = {
    id: number
    title: string
    isDone: boolean
}

type TodoListPropsType = {
    title: string
    tasks: Array<TasksType>
    removeTask: (id: number) => void
    changeFilter: (filter: FilterValuesType) => void
}

export function TodoList(props: TodoListPropsType) {
    return (
        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {
                        props.tasks.map((element) => {
                            return (
                                <li>
                                    <input type="checkbox" checked={element.isDone}/>
                                    <span>{element.title}</span>
                                    <button onClick={() => props.removeTask(element.id)}>✕</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <div>
                    <button onClick={() => props.changeFilter("all")}>All</button>
                    <button onClick={() => props.changeFilter("active")}>Active</button>
                    <button onClick={() => props.changeFilter("completed")}>Completed</button>
                </div>
            </div>
        </div>
    );
}
