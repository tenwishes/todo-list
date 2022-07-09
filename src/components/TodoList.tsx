import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import {FilterValuesType} from '../App'

export type TasksType = {
    id: string
    title: string
    isDone: boolean
}
type TodoListPropsType = {
    title: string
    tasks: Array<TasksType>
    removeTask: (id: string) => void
    addTask: (title: string) => void
    changeFilter: (filter: FilterValuesType) => void
}

export function TodoList(props: TodoListPropsType) {

    const [inputValue, setInputValue] = useState("")

    const title = props.title
    const tasks = props.tasks
    const addTask = (title: string) => {
        props.addTask(title)
    }
    const removeTask = (id: string) => {
        props.removeTask(id)
    }
    const changeFilter = (filter: FilterValuesType) => {
        props.changeFilter(filter)
    }

    const addTaskOnClickHandler = () => {
        addTask(inputValue)
        setInputValue("")
    }
    const addTaskOnKeyDownEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") {
            addTask(inputValue)
            setInputValue("")
        }
    }
    const changeInputOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    return (
        <div>
            <div>
                <h3>{title}</h3>
                <div>
                    <input
                        value={inputValue}
                        onChange={changeInputOnChangeHandler}
                        onKeyDown={addTaskOnKeyDownEnterHandler}
                    />
                    <button onClick={addTaskOnClickHandler}>+</button>
                </div>
                <ul>
                    {
                        tasks.map((t) => {
                            return (
                                <li key={t.id}>
                                    <input type="checkbox" checked={t.isDone}/>
                                    <span>{t.title}</span>
                                    <button onClick={() => removeTask(t.id)}>✕</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <div>
                    <button onClick={() => changeFilter("all")}>All</button>
                    <button onClick={() => changeFilter("active")}>Active</button>
                    <button onClick={() => changeFilter("completed")}>Completed</button>
                </div>
            </div>
        </div>
    );
}
