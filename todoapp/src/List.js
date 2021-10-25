import React from "react";
import ITem from "./item";


const List = ({ todos, deleteTodo }) => {
    //todo:データの数（todosの個数）の文だけItemコンポーネントを呼び出す

    return (
        <ul>
            {/* 
            <ITem content={todos[0].content}></ITem>
            <ITem content={todos[1].content}></ITem>
            <ITem content={todos[2].content}></ITem> */}
            {
                todos.map((todo) => {
                    return (
                        <ITem
                            content={todo.content}
                            key={todo.id}
                            id={todo.id}
                            deleteTodo={deleteTodo}
                        ></ITem>

                    )
                }

                )
            }
        </ul>
    )
}
export default List

