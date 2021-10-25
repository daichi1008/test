import React, { useState } from "react";
import Form from "./Form";
import List from "./List";
import { nanoid } from "nanoid";

const App = () => {
    const [todos, setTodos] = useState([])
    //追加機能
    const addTodo = (value) => {
        setTodos([
            ...todos,
            {
                content: value,
                id: nanoid()
            }
        ])
    }
    //削除機能
    const deleteTodo = (id) => {
        //todo: 渡されたidをもとに、そのidのついたtodoを削除する。

        // todos(配列)から、(もしオブジェクトのもつ"idプロパティの値"が、
        //"引数で渡されたidの値"と等しい場合）、その要素を取り除く

        //配列から、条件に合致する要素を取り除く関数、もしくは、条件に合致する要素のみ取り出す関数        

        //配列から、条件に合致する要素のみ取り出す関数filterを使っていく
        setTodos(todos.filter(todo => todo.id !== id))  //削除したい要素以外の要素を集めた配列をstate`todos`を上書きする。

    }
    return (
        <>
            <h1>Todo App</h1>
            <Form addTodo={addTodo}></Form>
            <List todos={todos} deleteTodo={deleteTodo}></List>

        </>
    )
}

export default App
