import React , {useState} from "react";

export default function Count(){
    const [count, setCount] = useState(0)
    return (
        <>
        <h1>You clicked the button {count} times</h1>
        <button onClick={()=>{setCount(count + 1)}}>+1</button>
        <button onClick={()=>{setCount(count - 1)}}>-1</button>
        <button onClick={()=>{setCount(0)}}>RESET</button>
        </>
    )
}
