import { useEffect, useState } from "react";

function Ue3(){
    const[count,setCount]=useState(0);
    const[name,setName]=useState("Vivek");
    
    useEffect(()=>{
        document.title=`This is my Title ${count} ${name}`
    
    },[count])
    // component did mount 
    return (
        <div>
            <h1>This is Counter {count}</h1>
            <h1>{name}</h1>
            <button onClick={()=>setCount(count+1)}>+1</button>
            <button onClick={()=>setName("Vivek Gupta")} >Change Name </button>
        </div>
    )
}
export default Ue3;