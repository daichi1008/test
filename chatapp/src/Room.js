import React, { useState, useEffect, useContext } from "react"
import firebase from "./config/firebase"
import { AuthContext } from "./AuthService"


const Room = () => {
    const [messages, setMessages] = useState([])
    const [value, setValue] = useState("")

    const user = useContext(AuthContext)
    console.log(user.displayName)

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.firestore().collection("messages")
            .add({
                content: value,
                user: user.displayName
            })
    }

    useEffect(() => {
        firebase.firestore().collection("messages")
            .onSnapshot((snapshot,) => {
                const messages = snapshot.docs.map(doc => {
                    return doc.data()

                })
                setMessages(messages)
            })
    }, [])

    return (
        <>
            <h1>Room</h1>
            <ul>
                {
                    messages.map((message, index) => <li key={index}> {message.user}:{message.content} </li>)
                }
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button type="submit">送信</button>
            </form>
            <button onClick={() => firebase.auth().signOut()}>Logout</button>
        </>
    )
}

export default Room