import { useState } from "react"
function Todo (){
    const[input,setInput] = useState('')
    const [todos, setTodos] = useState([])

    function generatedId(){
        return Math.random()*100
    }
    function handleSubmit (e){
        e.preventDefault()
       setTodos((todos)=>todos.concat({text:input, id:generatedId()}))
      
       setInput("")
    }
    function removeTodo (id){
        setTodos((todos)=>todos.filter((t)=>t.id !== id))
    }
    return(
        <>
        <h1 className="todoTitle">Todo App</h1>
        <main className="Todo">
            
<form>
    
    <h3>What is your plan for today?</h3>
    <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Add todo"></input>
    <button onClick={handleSubmit} className="AddTodo">Submit</button>
</form>
<div className="Todos-container">
<ol>
    {
        todos.map(({text, id})=>{
            return(
                <li key={id}> 
            <span>{text}</span>
            <button className="removeTodo" onClick={()=>removeTodo(id)}>Delete</button>
                </li>
            )
        })
    }
</ol>
</div>
        </main>
        </>
    )
}
export default Todo