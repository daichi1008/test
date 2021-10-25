import React, { useState } from "react";

const ITem = ({ content, id, deleteTodo }) => {
    const [isDone, setIsDone] = useState(false)

    const handleDelte = () => {
        //APPコンポーネントのもつ、todosから、自分のもつidと同じidを持つ要素を取り除いてほしい。

        //APPコンポーネントのもつ、todosから、特定のidを持つ要素を削除する関数deleteTodo
        deleteTodo(id)
    }
    // isDOne =>現在の状態の参照
    //setIsDone =>状態を更新する関数
    // todo:checkboxが変更された際、isDoneの状態を更新する
    // todo:isDoneの値によって、打ち消し線を描写する
    return (
        <li>
            <input
                type="checkbox"
                onChange={() => {
                    setIsDone(!isDone)
                }}
            />
            <span
                style={
                    { textDecoration: isDone ? `Line-through` : `none` }
                }
            >{content}</span>
            <button onClick={handleDelte}>削除</button>
        </li>
    )
}
export default ITem