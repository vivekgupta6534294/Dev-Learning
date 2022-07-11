import {useState} from "react"
function Counter(){
    const[count, setCount]=useState(0);
    const[text,setText]=useState('')
    return (
        <div>
            <h1>
                This is Counter {count}
            </h1>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button>
            <input value={text} onChange={(e)=>setText(e.target.value)}></input>
            <h1>{text}</h1>
        </div>
    )
}
export default Counter