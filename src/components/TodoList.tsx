import React from "react";

export type TasksType = {
    id: number
    title: string
    isDone: boolean
}

type TodoListPropsType = {
    title: string
    tasks: Array<TasksType>
    deleteTask: Function
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
                                    <button className="delete-button" onClick={ () => {
                                        props.deleteTask(element.id)
                                    }}>X</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    );
}
