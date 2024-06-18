import { useState } from "react"
import AddTodo from "./Components/AddTodo"
import Todos from "./Components/Todos"

function App (){
    return (
        <>
            <h1 className="bg-red-500" >Hii there</h1>
            <AddTodo/>
            <Todos/>
        </>
    )

}

export default App
