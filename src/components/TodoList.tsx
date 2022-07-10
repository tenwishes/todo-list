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
    changeStatus: (id: string, isDone: boolean) => void
    changeFilter: (filter: FilterValuesType) => void
    filter: FilterValuesType
}

export function TodoList(props: TodoListPropsType) {

    const [inputValue, setInputValue] = useState("")
    const [error, setError] = useState<string | null>(null)

    const title = props.title
    const tasks = props.tasks
    const filter = props.filter
    const addTask = (title: string) => {
        if(title.trim() !== "") {
            props.addTask(title.trim())
        }else {
            setError("This field is required!")
        }
    }
    const changeFilter = (filter: FilterValuesType) => {
        props.changeFilter(filter)
    }

    const addTaskOnClickHandler = () => {
        addTask(inputValue)
        setInputValue("")
    }
    const addTaskOnKeyDownEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
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
                        className={error ? "error" : ""}
                    />
                    <button onClick={addTaskOnClickHandler}>+</button>
                    {error && <div className="error-message">This field is required!</div>}
                </div>
                <ul>
                    {
                        tasks.map((t) => {
                            const changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
                                props.changeStatus(t.id, e.currentTarget.checked)
                            }
                            const removeTask = (id: string) => {
                                props.removeTask(id)
                            }

                            return (
                                <li key={t.id} className={t.isDone ? "is-done" : ""}>
                                    <input type="checkbox" checked={t.isDone} onChange={changeStatus}/>
                                    <span>{t.title}</span>
                                    <button onClick={() => removeTask(t.id)}>✕</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <div>
                    <button className={filter === "all" ? "active-filter" : ""} onClick={() => changeFilter("all")}>All</button>
                    <button className={filter === "active" ? "active-filter" : ""} onClick={() => changeFilter("active")}>Active</button>
                    <button className={filter === "completed" ? "active-filter" : ""} onClick={() => changeFilter("completed")}>Completed</button>
                </div>
            </div>
        </div>
    );
}
